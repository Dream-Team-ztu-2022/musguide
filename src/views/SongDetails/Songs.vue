<template>
  <section class="songs">
    <h1 class="title">Список треків</h1>

    <div class="songs-list">
      <Song
        v-for="({ title, img, listen, time }, key) in songs"
        :key="key"
        :title="title"
        :img="img"
        :listen="listen"
        :time="time"
        :index="key + 1"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import Song from '@/components/Song.vue';

@Component({
  components: { Song },
})
export default class Songs extends Vue {
  data() {
    return {
      songs: [{
        title: `2step (Ukrainian Remix)`,
        listen: `1 500 500`,
        time: `2:33`,
        img: `https://dvamelomana.com.ua/wp-content/uploads/2021/06/Antit__la___Hello__2019__5caf11d351005-1.png`,
      }],
    };
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
