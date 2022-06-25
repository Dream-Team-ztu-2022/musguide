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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 50px;
  margin: 30px 0;
}
</style>
