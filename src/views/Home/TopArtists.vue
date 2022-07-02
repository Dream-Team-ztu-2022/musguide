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
import { IArtist, KerveApi } from "@/api/KerveApi";
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
    const topArtists = await KerveApi.getTopArtists();

    this.items = topArtists.results.artist;
  }

  getKey(artist: IArtist) {
    return artist.name;
  }

  getTitle(artist: IArtist) {
    return artist.name;
  }

  getSubtitle() {
    return `Виконавець`;
  }

  getImage(artist: IArtist) {
    return artist.image;
  }

  getRoute(artist: IArtist) {
    const idName = artist.url.split(`/`).pop();
    return `/artist/${idName}`;
  }
}
</script>

<style lang="scss" scoped>
</style>
