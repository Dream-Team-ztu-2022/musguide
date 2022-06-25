<template>
  <section class="cardlist">
    <header>
      <h2 class="title" v-if="title">{{title}}</h2>
    </header>
    <img v-show="canScrollLeft"
      class="scroll scroll-left" src="../assets/left.svg" width="48" alt="scroll left"
      @click="scrollLeft">
    <img v-show="canScrollRight"
      class="scroll scroll-right" src="../assets/right.svg" width="48" alt="scroll right"
      @click="scrollRight">
    <main ref="scrollable" @scroll="updateScroll">
      <slot />
    </main>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';

@Component({
})
export default class CardList extends Vue {
  @Prop({ default: `` }) title!: string;

  canScrollLeft = true;

  canScrollRight = true;

  mounted() {
    this.updateScroll();
  }

  scrollLeft() {
    this.scrollBy(-this.scrollableSection.clientWidth);
  }

  scrollRight() {
    this.scrollBy(this.scrollableSection.clientWidth);
  }

  scrollBy(px: number) {
    this.scrollableSection.scrollBy({ left: px, behavior: `smooth` });
  }

  get scrollableSection() {
    return this.$refs.scrollable as HTMLDivElement;
  }

  updateScroll() {
    this.canScrollLeft = Boolean(this.scrollableSection.scrollLeft);
    this.canScrollRight = Boolean(
      Math.round(this.scrollableSection.scrollLeft) !== this.scrollableSection.clientWidth,
    );
  }
}
</script>

<style lang="scss" scoped>
section.cardlist {
  position: relative;
  width: 100%;

  header {
    .title {
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 60px;
    }
  }

  main {
    display: flex;
    overflow-x: auto;
    gap: 20px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;

    &.scroll-left {
      left: -20px;
    }

    &.scroll-right {
      right: -20px;
    }
  }
}
</style>
