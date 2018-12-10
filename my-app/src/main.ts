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
import { readCache, writeCache } from './apollo-link-state-store'

Vue.config.productionTip = false;

// install the vue-momnet plugin
Vue.use(require('vue-moment'))
Vue.use(VueApollo)

const stateLink = withClientState({
  cache: new InMemoryCache(),
  defaults: {
    countSample: 0
  },
  resolvers: {
    Mutation: {
      increment: (obj: any, args: any, {cache}: any) => {
        var rtn = readCache(cache, "countSample")
        writeCache(cache, "countSample", rtn + 1)
        return null
      },
    },
  },
});

// const httpLink = new HttpLink({ uri: 'http://127.0.0.1:4040' })

// const link = ApolloLink.from([stateLink, httpLink])

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    // link,
    link: stateLink,
    cache: new InMemoryCache(),
    connectToDevTools: true

  })
})
new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
