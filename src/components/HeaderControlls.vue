<template>
  <section class="header-controlls">
    <button class="button btn-play">
      <img src="../assets/btn-play.svg" alt="play" class="play" />
      Слухати
    </button>

    <button class="button">
      <img src="../assets/menu.svg" alt="menu" />
    </button>

    <div class="text">
      <div class="title">
        Слухають
      </div>
      <div class="subtitle">
        {{listening}}
      </div>
    </div>

    <div class="text">
      <div class="title">
        Прослухано
      </div>
      <div class="subtitle">
        {{listen}}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Vue } from '@smyld/vue-property-decorator';

export default class Card extends Vue {
  @Prop() listening!: string;

  @Prop() listen!: string;
}
</script>

<style lang="scss" scoped>
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
}

.btn-play {
  padding: 12px 55px 12px 35px;
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
