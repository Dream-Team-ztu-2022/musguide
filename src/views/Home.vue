<template>
  <div class="home">
    <top-tracks />

    <top-artists />

    <top-genres />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import TopTracks from './Home/TopTracks.vue';
import TopArtists from './Home/TopArtists.vue';
import TopGenres from './Home/TopGenres.vue';

@Component({
  components: {
    TopTracks,
    TopArtists,
    TopGenres,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1600px;
  margin: auto;
}
</style>
