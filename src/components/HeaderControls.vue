<template>
  <section class="header-controlls">
    <a class="button btn-play" :href="url" target="_blank">
      <img src="../assets/btn-play.svg" alt="play" class="play" />
      Слухати
    </a>

    <div class="dropdown-container">
      <button class="button">
        <img src="../assets/menu.svg" alt="menu" />
      </button>

      <div class="dropdown-content">
        <div class="dropdown-content-item" @click="handleOpenYoutube">
          Listen on youtube
        </div>
        <div class="dropdown-content-item" @click="handleOpenSpotify">
          Listen on spotify
        </div>
      </div>
    </div>

    <div class="text" v-if="listeners">
      <div class="title">
        Слухають
      </div>
      <div class="subtitle">
        {{listeners}}
      </div>
    </div>

    <div class="text" v-if="playcount">
      <div class="title">
        Прослухано
      </div>
      <div class="subtitle">
        {{playcount}}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Vue } from "@smyld/vue-property-decorator";

export default class HeaderControls extends Vue {
  @Prop() listeners!: string;

  @Prop() playcount!: string;

  @Prop() url!: string;

  handleOpenYoutube() {
    const id = `${this.trackId} ${this.artistId}`.trim();
    window.open(`https://www.youtube.com/results?search_query=${id}`);
  }

  handleOpenSpotify() {
    const id = `${this.trackId} ${this.artistId}`.trim();
    window.open(`https://open.spotify.com/search/${id}`);
  }

  get trackId() {
    return this.$route.params.trackId || ``;
  }

  get artistId() {
    return this.$route.params.artistId || ``;
  }
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  position: relative;

  .dropdown-content {
    position: absolute;
    left: 0;
    top: 0px;
    display: flex;
    flex-direction: column;
    width: 151px;
    background-color: #fff;
    padding: 15px 10px;
    opacity: 0;
    border-radius: 5px;
    transition: opacity 0.2s, height 0.5s;
    height: 0;
  }

  &:hover {
    .dropdown-content {
      opacity: 1;
      height: 110px;
    }
  }

  .dropdown-content-item {
    color: #121212;
    padding: 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: #aca4a483;
    }
  }
}

.header-controlls {
  margin: 32px 0;
  display: flex;
  gap: 38px;
  flex-wrap: wrap;
}

.play {
  margin-right: 35px;
}

.button {
  font-weight: 700;
  font-size: 28px;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  color: #10171E;
  display: flex;
  align-items: center;
  height: 60px;
  cursor: pointer;
}

.btn-play {
  padding: 12px 55px 12px 35px;
  background-color: #6b6b6b;
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
    background-color: lighten(#6b6b6b, 20%);
  }
}

.text {
  font-size: 24px;
}

.title {
  color: #A5AAAF;
  font-weight: 600;
}

.subtitle {
  margin-top: 4px;
  color: #F2F2F2;
  font-weight: 900;
}
</style>
