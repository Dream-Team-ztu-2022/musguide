<template>
  <article class="horizontal-list-item" :class="{ round, long, small }" :title="tooltip">
    <header>
      <slot name="preview">
        <figure v-if="!small" class="preview" :style="{ '--url': `url(${preview})` }" />
      </slot>

      <slot name="button">
        <img src="../assets/play.svg" width="48" alt="play" class="play" />
      </slot>
    </header>

    <main>
      <slot name="title">
        <strong v-if="title" class="title">{{displayableTitle}}</strong>
      </slot>
      <slot name="subtitle">
        <span v-if="subtitle" class="subtitle">{{subtitle}}</span>
      </slot>
    </main>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';

const LENGTH_TO_SMALL = 14;
const LENGTH_TO_CUT = 40;

@Component({
})
export default class Card extends Vue {
  @Prop() title!: string;

  @Prop() subtitle!: string;

  @Prop() preview!: string;

  @Prop({ default: false }) round!: boolean;

  @Prop({ default: false }) small!: boolean;

  get displayableTitle() {
    if (this.title.length < LENGTH_TO_CUT) return this.title;

    return `${this.title.slice(0, LENGTH_TO_CUT - 2)}…`;
  }

  get tooltip() {
    return `${this.subtitle} — ${this.title}`;
  }

  get long() {
    return this.title.length > LENGTH_TO_SMALL;
  }
}
</script>

<style lang="scss" scoped>
article {
  position: relative;
  width: 190px;
  height: 256px;
  background-color: #282828;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 16px;

  transition: background-color 0.1s;

  &:hover {
    background-color: #3C3C3C;

    .play {
      opacity: 1;
    }
  }

  &.small {
    min-width: 190px;
    height: 75px;

    .play {
      display: none;
    }

    .title {
      margin-top: 0;
    }
  }

  &.round .preview {
    border-radius: 50%;
  }

  &.long .title {
    font-size: 16px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview {
      margin: 0;
      width: 150px;
      height: 150px;
      background-image: var(--url);
      background-position: center;
      background-size: cover;
      border-radius: 10px;
    }

    .play {
      opacity: 0;
      position: absolute;
      right: 26px;
      top: 112px;
      transition: opacity 0.1s;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 15px;

    .title {
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 20px;
      height: 0;
      display: flex;
      align-items: center;
      margin-top: 20px;
    }

    .subtitle {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      color: #BDBDBD;
      position: absolute;
      left: 17px;
      bottom: 13px;
    }
  }
}
</style>
