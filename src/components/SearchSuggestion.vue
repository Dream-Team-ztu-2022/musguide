<template>
  <div class="suggestion" :class="{ 'has-border': !!image, clickable: !!route }" @click="onClick">
    <img v-if="image" :src="image" alt="" />
    <div class="content">
      <div v-if="title" class="title">{{title}}</div>
      <div v-if="subtitle" class="subtitle">{{subtitle}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';

@Component({})
export default class SearchSuggestion extends Vue {
  @Prop() image!: string;

  @Prop() title!: string;

  @Prop() subtitle!: string;

  @Prop({ default: `` }) route!: string;

  onClick() {
    if (!this.route) return;

    this.$router.push(this.route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.suggestion {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  background-color: #121212;

  transition: background-color 0.5s;

  &.has-border {
    border: 1px solid#302F2F;
  }

  &.clickable {
    cursor: pointer;

    &:hover {
      background-color: lighten(#121212, 20%);
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #FFFFFF;

    .subtitle {
      color: #BDBDBD;
    }
  }
}
</style>
