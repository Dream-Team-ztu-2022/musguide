<template>
  <nav-bar />
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import NavBar from '@/components/NavBar.vue';

@Component({ components: { NavBar } })
export default class App extends Vue {
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
