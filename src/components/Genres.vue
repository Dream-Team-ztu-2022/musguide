<template>
  <section class="genres">
    <div
      :class="{ genre: true, active: +key === 0 }"
      v-for="(item, key) in genres" :key="key"
    >
      Rock
    </div>

    <div class="show-all">
      <button class="show-all-btn">
        <img src="../assets/plus.svg" class="plus-svg"/>
      </button>
      Показати всі жанри
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Vue } from '@smyld/vue-property-decorator';

export default class Genres extends Vue {
  @Prop() listening!: string;

  @Prop() listen!: string;

  data() {
    return {
      genres: [`Rock`, `Rock`, `Rock`, `Rock`, `Rock`, `Rock`],
    };
  }
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

.show-all {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #A5AAAF;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

.show-all-btn {
  border: 1px solid #D9D9D9;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: transparent;
}

.genre {
  width: 136px;
  height: 36px;
  font-weight: 500;
  font-size: 24px;
  color: #A5AAAF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D9D9D9;
  border-radius: 19px;
  cursor: pointer;

  &.active, &:hover {
    background: #D9D9D9;
    color: #121212;
  }
}
</style>
