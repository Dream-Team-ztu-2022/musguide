<template>
  <div class="song" v-on:click="onClick">
    <div class="song-block">
      <div class="index">{{index}}</div>
      <img :src="img" alt="song-img" class="img" v-if="img"/>
      <img src="https://www.glyric.com/modules/custom/glyrics_custom/images/player_default_cover.png" alt="song-img" class="img" v-if="!img"/>

      {{title}}
    </div>
    <div class="song-block">
      {{listeners}}
    </div>
    <div class="song-block">
      {{playcount}}
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "@smyld/vue-property-decorator";

export default class Song extends Vue {
  @Prop() title!: string;

  @Prop() listeners!: string;

  @Prop() playcount!: string;

  @Prop() index!: string;

  @Prop() img!: string;

  @Prop() onClick!: () => void;
}
</script>

<style lang="scss" scoped>
.song {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.index {
  position: absolute;
}

.song-block {
  display: flex;
  align-items: center;
  width: 33.33%;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;

  &:first-child {
    justify-content: flex-start;
  }

  @media (max-width: 900px) {
    width: auto;
    &:not(:first-child) {
      display: none;
    }
  }
}

.img {
  width: 59px;
  height: 59px;
  object-fit: cover;
  margin: 0 30px 0 60px;
}
</style>
