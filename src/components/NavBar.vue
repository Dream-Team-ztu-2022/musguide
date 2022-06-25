<template>
  <nav>
    <img src="../assets/logo.svg" width="75" height="45" alt="logo" class="logo"/>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';

@Component({})
export default class NavBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  .logo {
    margin: 30px;
  }
}
</style>
