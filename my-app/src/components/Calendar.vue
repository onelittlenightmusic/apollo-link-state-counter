<template>
  <div>
    <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
    <div> {{ count }} </div>
    <button v-on:click="increment()" > +1 </button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const FeedQuery = gql`
{
  count2 @client
}
`

  export default {
    apollo: {
      count2: {
        query: FeedQuery,
        loadingKey: 'loading'
      }
    },
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false,
        count2: 3
      }
    },
    computed: 
    {
      count() {
        return this.$store.state.count
      }
    },
          // mapState(['count']),
    methods: {
      increment() {
        this.$store.commit('increment', 1)
        this.$apollo.mutate({mutation: gql`mutation { increment @client }`})
        console.log(JSON.stringify(this.count2))
      }
    },

  }
</script>