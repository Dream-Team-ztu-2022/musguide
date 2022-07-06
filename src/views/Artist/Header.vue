<template>
  <section class="header">
    <div class="info">
      <h1 class="title">{{name}}</h1>

      <header-controlls
        :listeners="getListeners(listeners)"
        :playcount="getListeners(playcount)"
        :url="artistUrl"
      />

      <p class="description" v-if="description" v-html="description" />
    </div>

    <img :src="img" class="img" v-if="img">
    <img src="../../assets/no-img.svg" class="img" v-if="!img">
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "@smyld/vue-property-decorator";
import { ScrobblerApi } from "@/api/ScrobblerApi";
import { MusicBrainzApi } from "@/api/MusicBrainzApi";
import { getListeners } from "@/utils";
import HeaderControlls from "@/components/HeaderControls.vue";

@Component({
  components: { HeaderControlls },
})
export default class Header extends Vue {
  name = "";

  listeners = "";

  playcount = "";

  description = "";

  artistUrl = "";

  img = "";

  getListeners = getListeners;

  mounted() {
    this.fetch();
  }

  async fetch() {
    const { artist } = await ScrobblerApi.getArtist(this.$route.params.artistId as string);
    let imageUrl = "";
    try {
      const data = await MusicBrainzApi.getArtist(artist.mbid);
      imageUrl = data?.relations.find((x: any) => x.type === "image").url.resource;
      if (imageUrl.startsWith("https://commons.wikimedia.org/wiki/File:")) {
        const filename = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
        imageUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filename}`;
      }
    } catch (e) {
      // console.log(e)
    }

    this.name = artist.name;
    this.listeners = artist.stats.listeners;
    this.playcount = artist.stats.playcount;
    this.description = artist.bio.content;
    this.artistUrl = artist.url;
    this.img = imageUrl;
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 900;
  font-size: 96px;
  margin: 0;
}

.description {
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 24px;
  max-width: 628px;
  height: 200px;
  overflow: auto;
  white-space: break-spaces;
}

.details {
  font-weight: 700;
  font-size: 24px;
  color: #A5AAAF;
  text-transform: uppercase;
  cursor: pointer;
}

.info {
  background: linear-gradient(
    90deg, #152330 68.85%,
    rgba(21, 35, 48, 0) 84.99%,
    rgba(21, 35, 48, 0) 166.84%);
  padding: 135.5px 0 32px 32px;
  width: 75%;
  position: relative;
  z-index: 11;
}

.img {
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  height: 100%;
  width: 50%;
  z-index: 10;
}

.header {
  position: relative;
}
</style>
