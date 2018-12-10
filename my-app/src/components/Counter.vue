<template>
  <div>
    <div> {{ countSample }} </div>
    <v-btn color="success" v-on:click="increment()" > +1 </v-btn>
  </div>
</template>

<script>
import { apolloState, argMutate } from '../apollo-link-state-store'

  export default {
    apollo: {
      countSample: apolloState("countSample")
    },
    data () {
      return {
        countSample: 0
      }
    },
    methods: {
      increment() {
        this.$apollo.mutate(argMutate("increment"))
      }
    },

  }
</script>