import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { withClientState } from 'apollo-link-state';
import { readCount, writeCount, initialCounter } from './apollo-link-state-store'

Vue.config.productionTip = false;

// install the vue-momnet plugin
Vue.use(require('vue-moment'))
Vue.use(VueApollo)

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults: initialCounter,
  resolvers: {
    Mutation: {
      increment: (obj: any, args: any, {cache}: any) => {
        var rtn = readCount(cache)
        return writeCount(cache, rtn + 1)
      },
      count2: (context: any, {data}: any, {cache}: any) => {
        return readCount(cache)
      }
    },
      },
});

const httpLink = new HttpLink({ uri: 'http://127.0.0.1:4040' })

const link = ApolloLink.from([stateLink, httpLink])

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    // link: new HttpLink({ uri: 'http://127.0.0.1:5042/graph' }),
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true

  })
})
new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount('#app');
