<template>
  <div class="artist">
    <artist-header />

    <genres :genres="genres" />

    <songs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "@smyld/vue-property-decorator";
import { ScrobblerApi } from "@/api/ScrobblerApi";
import ArtistHeader from "./Artist/Header.vue";
import Songs from "./Artist/Songs.vue";
import Genres from "../components/Genres.vue";

@Component({
  components: {
    ArtistHeader,
    Genres,
    Songs,
  },
})
export default class Artist extends Vue {
  genres: string[] = [];

  mounted() {
    this.fetch();
  }

  async fetch() {
    const { toptags } = await ScrobblerApi.getArtistTags(this.artistId);

    this.genres = toptags.tag.slice(0, 5).map((tag: any) => tag.name);
  }

  get artistId() {
    return this.$route.params.artistId as string;
  }
}
</script>

<style lang="scss" scoped>
.artist {
  display: flex;
  flex-direction: column;
}
</style>
