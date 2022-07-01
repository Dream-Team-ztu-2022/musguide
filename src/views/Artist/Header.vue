<template>
  <section class="header">
    <div class="info">
      <h1 class="title">Антитіла</h1>

      <header-controlls listen="5 млн." listening="500 тис." />

      <p class="description">
        «Антитела» — український поп-рок-гурт із Києва, що виник у 2008 році.
         Фронтменом музичного колективу є Тарас Тополя.
         У репертуарі гурту є пісні...
      </p>

      <p class="details">
        Докладніше
      </p>
    </div>

    <img src="https://24tv.ua/resources/photos/news/3952x3034_DIR/202111/1792915_15356127.jpg?202111085916" class="img">
  </section>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import HeaderControlls from '@/components/HeaderControls.vue';

@Component({
  components: { HeaderControlls },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 900;
  font-size: 96px;
  margin: 0;
}

.description {
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 24px;
  max-width: 628px;
  white-space: break-spaces;
}

.details {
  font-weight: 700;
  font-size: 24px;
  color: #A5AAAF;
  text-transform: uppercase;
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

.header {
  position: relative;
}
</style>
