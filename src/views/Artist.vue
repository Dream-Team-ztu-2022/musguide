<template>
  <div class="artist">
    <artist-header />

    <genres />

    <songs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import ArtistHeader from './Artist/Header.vue';
import Songs from './Artist/Songs.vue';
import Genres from '../components/Genres.vue';

@Component({
  components: {
    ArtistHeader,
    Genres,
    Songs,
  },
})
export default class Artist extends Vue {}
</script>

<style lang="scss" scoped>
.artist {
  display: flex;
  flex-direction: column;
  margin-top: -136.5px;
}
</style>
