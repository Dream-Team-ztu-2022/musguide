<template>
  <section class="genres">
    <div
      class="genre"
      v-for="(item, key) in genres" :key="key"
    >
      {{item}}
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Vue } from "@smyld/vue-property-decorator";

export default class Genres extends Vue {
  @Prop() genres!: string[];
}
</script>

<style lang="scss" scoped>
.genres {
  display: flex;
  gap: 22px;
  margin: 35px;
  flex-wrap: wrap;
  align-items: center;
}

.genre {
  font-weight: 500;
  font-size: 24px;
  color: #A5AAAF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D9D9D9;
  border-radius: 19px;
  padding: 5px 15px;
}

</style>
