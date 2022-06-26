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
import { IArtist, ScrobblerApi } from "@/api/ScrobblerApi";
import { MusicBrainzApi } from "@/api/MusicBrainzApi";
import CardList from "@/components/CardList.vue";
import Card from "@/components/Card.vue";
import { delay } from "@/utils";
import { DEFAULT_AVATAR } from "@/constants";
import AbstractTopCardList from "./AbstractTopCardList.vue";

interface IArtistWithImg extends IArtist {
  img: string;
}

@Component({
  components: { CardList, Card, AbstractTopCardList },
})
export default class TopArtists extends Vue {
  items: IArtistWithImg[] = [];

  images: string[] = [];

  listName = `Топ виконавців`;

  cardListProps = {
    round: true,
  };

  mounted() {
    this.fetch();
  }

  async fetch() {
    const topArtists = await ScrobblerApi.getTopArtists();

    this.items = topArtists.artists.artist.map((x) => ({ ...x, img: `` }));

    /* eslint-disable */
    for (const artist of this.items) {
      if (!artist.mbid) {
        artist.img = DEFAULT_AVATAR;
        continue;
      }
      MusicBrainzApi.getArtist(artist.mbid)
        .then((additional) => {
          console.log(additional);
          let imageUrl = additional.relations.find((x: any) => x.type === `image`).url.resource;
          if (imageUrl.startsWith(`https://commons.wikimedia.org/wiki/File:`)) {
            const filename = imageUrl.substring(imageUrl.lastIndexOf(`/`) + 1);
            imageUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filename}`;
          }
          artist.img = imageUrl;
          console.log(`apply img`, artist.img);
        })
        .catch(() => {
          artist.img = DEFAULT_AVATAR;
        });
      await delay(2000);
    }
    /* eslint-enable */
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

  getImage(artist: IArtistWithImg) {
    // return (
    //   artist.image.find((image) => image.size === `medium`)?.[`#text`] || `#`
    // );
    return artist.img;
  }

  getRoute(artist: IArtist) {
    return `/artist/${artist.mbid}`;
  }
}
</script>

<style lang="scss" scoped>
</style>
