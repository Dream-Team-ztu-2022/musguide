<template>
  <div class="artist">
    <song-header />

    <div class="genres">
      <genres />
    </div>

    <songs />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';
import SongHeader from './SongDetails/Header.vue';
import Songs from './SongDetails/Songs.vue';
import Genres from '../components/Genres.vue';

@Component({
  components: {
    SongHeader,
    Genres,
    Songs,
  },
})
export default class SongDetails extends Vue {
  @Prop() mbid!: string;
}
</script>

<style lang="scss" scoped>
.genres {
  width: calc(100% - 350px);
  @media (max-width: 1365px) {
    width: 100%;
  }
}
.artist {
  display: flex;
  flex-direction: column;
}
</style>
