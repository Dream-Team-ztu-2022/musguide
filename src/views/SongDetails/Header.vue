<template>
  <section class="header">
    <div class="info">
      <h2 class="subtitle">Ed sheeran ft. Antytila</h2>
      <h1 class="title">2step (Ukrainian Remix)</h1>

      <header-controlls listen="5 млн." listening="500 тис." />

      <div class="footer">
        <p class="description">Пісня випущена під час кровопролитної
          війни проти рашистської федерації, СЛАВА УКРАЇНІ!!!!</p>
        <div class="grid-container">
          <div class="grid-item">Тривалість</div>
          <div class="grid-item">1 композиція 2:33</div>
          <div class="grid-item">Дата релізу</div>
          <div class="grid-item">2 травня 2022</div>
        </div>
      </div>
      <p class="details">
        Докладніше
      </p>
    </div>

    <img src="https://24tv.ua/resources/photos/news/3952x3034_DIR/202111/1792915_15356127.jpg?202111085916" class="img">
    <img src="https://dvamelomana.com.ua/wp-content/uploads/2021/06/Antit__la___Hello__2019__5caf11d351005-1.png" class="song-img">
  </section>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import HeaderControlls from '@/components/HeaderControlls.vue';

@Component({
  components: { HeaderControlls },
})
export default class Header extends Vue {}
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
  white-space: break-spaces;
  line-height: 30px;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 200px);

  @media (max-width: 1365px) {
    width: 100%;
  }
}

.details {
  font-weight: 700;
  font-size: 24px;
  color: #A5AAAF;
  text-transform: uppercase;
  margin: 0;
  line-height: 30px;
  margin-top: 24px;
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

.img {
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  height: 100%;
  width: 50%;
  z-index: 10;
}

.song-img {
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
