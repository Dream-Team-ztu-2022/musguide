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
import { DEFAULT_AVATAR } from "@/constants";
import { MusicBrainzApi } from "@/api/MusicBrainzApi";
import { delay } from "@/utils";
import AbstractTopCardList from "./AbstractTopCardList.vue";

interface ITrackWithImg extends ITrack {
  img: string;
}

@Component({
  components: { CardList, Card, AbstractTopCardList },
})
export default class TopTracks extends Vue {
  items: ITrackWithImg[] = [];

  listName = `Топ треків`;

  cardListProps = {
    round: false,
  };

  mounted() {
    this.fetch();
  }

  async fetch() {
    const topArtists = await ScrobblerApi.getTopTracks();

    this.items = topArtists.tracks.track.filter((track) => track.mbid).map((x) => ({ ...x, img: x.image[0][`#text`] }));

    /* eslint-disable */
    for (const track of this.items) {
      if (!track.mbid) {
        track.img = DEFAULT_AVATAR;
        continue;
      }
      MusicBrainzApi.getSong(track.mbid)
        .then((additional) => {
          let imageUrl = additional.relations.find((x: any) => x.type === `image`).url.resource;
          if (imageUrl.startsWith(`https://commons.wikimedia.org/wiki/File:`)) {
            const filename = imageUrl.substring(imageUrl.lastIndexOf(`/`) + 1);
            imageUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filename}`;
          }
          track.img = imageUrl;
        })
        .catch(() => {
          track.img = DEFAULT_AVATAR;
        });
      await delay(2000);
    }
    /* eslint-enable */
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
