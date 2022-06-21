<template>
  <abstract-top-card-list
    :cardListProps="cardListProps"
    :listName="listName"
    :items="items"
    :getKey="getKey"
    :getTitle="getTitle"
    :getSubtitle="getSubtitle"
    :getImage="getImage"
  />
</template>

<script lang="ts">
import { Component, Vue } from "@smyld/vue-property-decorator";
import { IArtist, ScrobblerApi } from "@/api/ScrobblerApi";
import CardList from "@/components/CardList.vue";
import Card from "@/components/Card.vue";
import AbstractTopCardList from "./AbstractTopCardList.vue";

@Component({
  components: { CardList, Card, AbstractTopCardList },
})
export default class TopArtists extends Vue {
  items: IArtist[] = [];

  listName = `Топ виконавців`;

  cardListProps = {
    round: true,
  };

  mounted() {
    this.fetch();
  }

  async fetch() {
    const topArtists = await ScrobblerApi.getTopArtists();

    this.items = topArtists.artists.artist;
  }

  getKey(artist: IArtist) {
    return artist.mbid || artist.name;
  }

  getTitle(artist: IArtist) {
    return artist.name;
  }

  getSubtitle() {
    return `Виконавець`;
  }

  getImage(artist: IArtist) {
    return (
      artist.image.find((image) => image.size === `medium`)?.[`#text`] || `#`
    );
  }
}
</script>

<style lang="scss" scoped>
</style>
