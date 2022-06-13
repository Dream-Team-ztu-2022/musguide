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
import { ITag, ScrobblerApi } from "@/api/ScrobblerApi";
import CardList from "@/components/CardList.vue";
import Card from "@/components/Card.vue";
import AbstractTopCardList from "./AbstractTopCardList.vue";

@Component({
  components: { CardList, Card, AbstractTopCardList },
})
export default class TopGenres extends Vue {
  items: ITag[] = [];

  listName = `Топ жанрів`;

  cardListProps = {
    round: false,
  };

  mounted() {
    this.fetch();
  }

  async fetch() {
    const topArtists = await ScrobblerApi.getTopTags();

    this.items = topArtists.tags.tag;
  }

  getKey(tag: ITag) {
    return tag.name;
  }

  getTitle(tag: ITag) {
    return tag.name;
  }

  getSubtitle(tag: ITag) {
    return `${(Number(tag.taggings) / 1000).toFixed(1)}k композицій`;
  }

  private generateRandomColorImage() {
    const rnd = () => Math.floor(Math.random() * 255);
    const color = `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
    const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="${color}" /></svg>`;
    return `data:image/svg+xml;utf8,${svg}`;
  }

  getImage(tag: ITag) {
    return this.generateRandomColorImage();
  }
}
</script>

<style lang="scss" scoped>
</style>
