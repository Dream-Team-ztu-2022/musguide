<template>
  <div class="artist">
    <song-header
      :artistName="artistName"
      :name="name"
      :description="description"
      :duration="duration"
      :published="published"
      :img="img"
      :listeners="listeners"
      :playcount="playcount"
      :trackUrl="trackUrl"
    />

    <div class="genres">
      <genres :genres="tags" />
    </div>

    <songs
      :songImg="img"
      :songName="name"
      :songDuration="duration"
      :songPlaycount="playcount"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "@smyld/vue-property-decorator";
import { ScrobblerApi } from "@/api/ScrobblerApi";
import { getTime } from "@/utils";
import SongHeader from "./SongDetails/Header.vue";
import Songs from "./SongDetails/Songs.vue";
import Genres from "../components/Genres.vue";

@Component({
  components: {
    SongHeader,
    Genres,
    Songs,
  },
})
export default class SongDetails extends Vue {
  @Prop() artistId!: string;

  @Prop() trackId!: string;

  getTime = getTime;

  artistName = "";

  name = "";

  description = "";

  duration = "";

  published = "";

  img = "";

  listeners = "";

  playcount = "";

  trackUrl = "";

  tags = [];

  mounted() {
    this.fetch();
  }

  async fetch() {
    const { track } = await ScrobblerApi.getTrackInfo(this.artistId, this.trackId);

    this.artistName = track.artist.name;
    this.name = track.name;
    this.description = track.wiki?.content;
    this.duration = getTime(track.duration);
    this.published = track.wiki?.published;
    this.img = track.album?.image?.[3]?.["#text"];
    this.listeners = track.listeners;
    this.playcount = track.playcount;
    this.tags = track.toptags.tag.map((tag: any) => tag.name);
    this.trackUrl = track.url;
  }
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
