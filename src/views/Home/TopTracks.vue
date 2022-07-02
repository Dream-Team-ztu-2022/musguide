<template>
  <abstract-top-card-list
    :cardListProps="cardListProps"
    :listName="listName"
    :items="items"
    :getKey="getKey"
    :getTitle="getTitle"
    :getSubtitle="getSubtitle"
    :getImage="getImage"
    :getRoute="getRoute"
  />
</template>

<script lang="ts">
import { Component, Vue } from "@smyld/vue-property-decorator";
import { ITrack, KerveApi } from "@/api/KerveApi";
import CardList from "@/components/CardList.vue";
import Card from "@/components/Card.vue";
import AbstractTopCardList from "./AbstractTopCardList.vue";

@Component({
  components: { CardList, Card, AbstractTopCardList },
})
export default class TopTracks extends Vue {
  items: ITrack[] = [];

  listName = `Топ треків`;

  cardListProps = {
    round: false,
  };

  mounted() {
    this.fetch();
  }

  async fetch() {
    const topArtists = await KerveApi.getTopTracks();

    this.items = topArtists.results.track;
  }

  getKey(track: ITrack) {
    return track.url;
  }

  getTitle(track: ITrack) {
    return track.name;
  }

  getSubtitle(track: ITrack) {
    return track.artist;
  }

  getImage(track: ITrack) {
    return track.image;
  }

  getRoute(track: ITrack) {
    const [artistId, , trackId] = track.url.split(`/`).slice(-3);
    return `/track/${artistId}/${trackId}`;
  }
}
</script>
