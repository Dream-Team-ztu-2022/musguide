<template>
  <section class="header">
    <div class="info">
      <h2 class="subtitle">{{artistName}}</h2>
      <h1 class="title">{{name}}</h1>

      <header-controls
        :listeners="getListeners(listeners)"
        :playcount="getListeners(playcount)"
        :url="trackUrl"
      />

      <div class="footer">
        <p class="description" v-html="description"></p>
        <div class="grid-container">
          <template v-if="duration !== '0:0'">
            <div class="grid-item">Тривалість</div>
            <div class="grid-item">1 композиція {{duration}}</div>
          </template>
          <template v-if="published">
            <div class="grid-item">Дата релізу</div>
            <div class="grid-item">{{published}}</div>
          </template>
        </div>
      </div>
    </div>

    <img v-if="img" :src="img" class="background-cover">
    <img v-else src="../../assets/no-img.svg" class="background-cover">
    <img v-if="img" :src="img" class="song-cover">
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "@smyld/vue-property-decorator";
import { getListeners } from "@/utils";
import HeaderControls from "@/components/HeaderControls.vue";

@Component({
  components: { HeaderControls },
})
export default class Header extends Vue {
  getListeners = getListeners

  @Prop() name!: string;

  @Prop() artistName!: string;

  @Prop() description!: string;

  @Prop() duration!: string;

  @Prop() published!: string;

  @Prop() img!: string;

  @Prop() listeners!: string;

  @Prop() playcount!: string;

  @Prop() trackUrl!: string;
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 900;
  font-size: 64px;
  margin: 0;
}

.subtitle {
  font-weight: 700;
  line-height: 40px;
  font-size: 32px;
  margin: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 35px;
  column-gap: 55px;
  width: fit-content;
  box-sizing: border-box;
}

.grid-item {
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
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

.footer {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 200px);

  @media (max-width: 1365px) {
    width: 100%;
  }
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

.background-cover {
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  height: 100%;
  width: 50%;
  z-index: 10;
}

.song-cover {
  position: absolute;
  top: 260px;
  right: 37px;
  object-fit: cover;
  height: 553px;
  width: 553px;
  z-index: 12;
  border: 8px solid #121212;

  @media (max-width: 1365px) {
    display: none;
  }
}

.header {
  position: relative;
}
</style>
