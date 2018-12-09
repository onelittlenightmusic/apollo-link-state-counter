<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="navBar"
    >
        <v-list dense class="pt-0">
          <router-link to="/table">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>俺の漫画大全</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>settings</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>俺の映画大全</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/counter">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>counter</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>俺のカウンター</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>          <Calendar/>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar
      dark
      color="primary"
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="navBar = !navBar"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">俺のアプリ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Calendar from './components/Calendar'
import Counter from './components/Counter'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calendar,
    Counter
  },
  data () {
    return {
      //
    }
  }
}
</script>
