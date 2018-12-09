<template>
  <div>
    <div> {{ count2 }} </div>
    <v-btn color="success" v-on:click="increment()" > +1 </v-btn>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { vueCounter } from '../apollo-link-state-store'

  export default {
    apollo: {
      count2: vueCounter
    },
    data () {
      return {
        count2: 3
      }
    },
    methods: {
      increment() {
        this.$apollo.mutate({
            mutation: gql`mutation { increment @client }`
        })
        console.log(JSON.stringify(this.count2))
      }
    },

  }
</script>