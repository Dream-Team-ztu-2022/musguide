<template>
  <article :class="{ 'horizontal-list-item': true, round }">
    <header>
      <slot name="preview">
        <figure class="preview" :style="{ '--url': `url(${preview})` }" />
      </slot>

      <slot name="button">
        <img src="../assets/play.svg" alt="play" class="play" />
      </slot>
    </header>

    <main>
      <slot name="title">
        <strong v-if="title" class="title">{{title}}</strong>
      </slot>
      <slot name="subtitle">
        <span v-if="subtitle" class="subtitle">{{subtitle}}</span>
      </slot>
    </main>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';

@Component({
})
export default class Card extends Vue {
  @Prop() title!: string;

  @Prop() subtitle!: string;

  @Prop() preview!: string;

  @Prop({ default: false }) round!: boolean;
}
</script>

<style lang="scss" scoped>
article {
  position: relative;
  width: 270px;
  height: 370px;
  background-color: #282828;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 20px;
  margin: 0 25px;

  transition: background-color 0.1s;

  &:hover {
    background-color: #3C3C3C;

    .play {
      opacity: 1;
    }
  }

  &.round .preview {
    border-radius: 50%;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview {
      margin: 0;
      width: 230px;
      height: 230px;
      background-image: var(--url);
      background-position: center;
      background-size: cover;
    }

    .play {
      opacity: 0;
      position: absolute;
      right: 30px;
      top: 170px;
      transition: opacity 0.1s;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;

    .title {
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 30px;
    }

    .subtitle {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #BDBDBD;
    }
  }
}
</style>
