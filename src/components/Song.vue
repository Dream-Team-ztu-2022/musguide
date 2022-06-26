<template>
  <div class="song">
    <div class="song-block">
      <div class="index">{{index}}</div>
      <img :src="img" alt="song-img" class="img"/>
      {{title}}
    </div>
    <div class="song-block">
      {{listen}}
    </div>
    <div class="song-block">
      {{time}}
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from '@smyld/vue-property-decorator';

export default class Song extends Vue {
  @Prop() title!: string;

  @Prop() listen!: string;

  @Prop() time!: string;

  @Prop() index!: string;

  @Prop() img!: string;
}
</script>

<style lang="scss" scoped>
.song {
  display: flex;
  align-items: center;
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
  margin: 0 30px;
}
</style>
