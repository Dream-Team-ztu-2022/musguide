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
    small: true,
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

  getImage(tag: ITag) {
    return false;
    // return `#`; // We don't have any tag titles :(
  }
}
</script>

<style lang="scss" scoped>
</style>
