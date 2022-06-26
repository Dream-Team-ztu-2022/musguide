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
import { ITrack, ScrobblerApi } from "@/api/ScrobblerApi";
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
    const topArtists = await ScrobblerApi.getTopTracks();

    this.items = topArtists.tracks.track.filter((track) => track.mbid);
  }

  getKey(track: ITrack) {
    return track.mbid || track.name;
  }

  getTitle(track: ITrack) {
    return track.name;
  }

  getSubtitle(track: ITrack) {
    return track.artist.name;
  }

  getImage(track: ITrack) {
    return (
      track.image.find((image) => image.size === `medium`)?.[`#text`] || `#`
    );
  }

  getRoute(track: ITrack) {
    return `/track/${track.mbid}`;
  }
}
</script>
