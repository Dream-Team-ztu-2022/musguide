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

h2 {
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  margin: 30px 0;
}
</style>
