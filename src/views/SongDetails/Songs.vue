<template>
  <section class="songs">
    <h1 class="title">Список треків</h1>

    <div class="songs-list">
      <Song
        :title="songName"
        :img="songImg"
        :listeners="getListeners(songPlaycount)"
        :playcount="songDuration"
        :index="1"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "@smyld/vue-property-decorator";
import { getListeners } from "@/utils";
import Song from "@/components/Song.vue";

@Component({
  components: { Song },
})
export default class Songs extends Vue {
  getListeners = getListeners;

  @Prop() songImg!: string;

  @Prop() songName!: string;

  @Prop() songDuration!: string;

  @Prop() songPlaycount!: string;
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
