<template>
  <section class="songs">
    <h1 class="title">Tоп треки</h1>

    <div class="songs-list">
      <Song
        v-for="({ name, image, listeners, playcount }, key) in songList"
        :onClick="() => onClick(name)"
        :key="key"
        :title="name"
        :img="image[0]['#text']"
        :listeners="getListeners(listeners)"
        :playcount="getListeners(playcount)"
        :index="key + 1"
      />
    </div>

    <p class="show-more" @click="fullSongList = !fullSongList">
      {{fullSongList ? `Показати менше` : `Показати все`}}
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "@smyld/vue-property-decorator";
import { ScrobblerApi } from "@/api/ScrobblerApi";
import { getListeners } from "@/utils";
import Song from "@/components/Song.vue";

@Component({
  components: { Song },
})
export default class Songs extends Vue {
  songs: any[] = [];

  fullSongList = false;

  getListeners = getListeners;

  onClick(track: string) {
    this.$router.push(`/track/${this.$route?.params?.artistId as string}/${track}`);
  }

  mounted() {
    this.fetch();
  }

  async fetch() {
    const { toptracks } = await ScrobblerApi.getArtistTopTracks(
      this.$route?.params?.artistId as string,
    );
    this.songs = toptracks.track;
  }

  get songList() {
    return this.fullSongList ? this.songs : this.songs.slice(0, 5);
  }
}
</script>

<style lang="scss" scoped>
.songs-list {
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-left: 40px;
  margin-top: 35px;
}

.title {
  font-weight: 900;
  font-size: 48px;
  margin: 0;
}

.show-more {
  font-weight: 900;
  font-size: 28px;
  margin-top: 27px;
  cursor: pointer;
}

.songs {
  margin: 0 35px 35px;
}
</style>
