<template>
  <section class="header-controlls">
    <a class="button btn-play" :href="url" target="_blank">
      <img src="../assets/btn-play.svg" alt="play" class="play" />
      Слухати
    </a>

    <div class="dropdown-container">
      <button class="button" v-on:click="handleDropdownOpen">
        <img src="../assets/menu.svg" alt="menu" />
      </button>

      <div class="dropdown-content" v-if="isDropdownOpen">
        <div class="dropdown-content-item">
          Listen on youtube
        </div>
        <div class="dropdown-content-item">
          Listen on spotify
        </div>
      </div>
    </div>

    <div class="text">
      <div class="title">
        Слухають
      </div>
      <div class="subtitle">
        {{listeners}}
      </div>
    </div>

    <div class="text">
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

  isDropdownOpen = false;

  handleDropdownOpen() {
    this.isDropdownOpen = true;
  }

  handleDropdownClose() {
    this.isDropdownOpen = false;
  }
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  position: relative;
}

.dropdown-content {
  width: 151px;
  background-color: #fff;
  padding: 15px 10px;
  position: absolute;
  bottom: -83px;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.dropdown-content-item {
  color: #121212;
  padding: 10px 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #aea8a8;
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
