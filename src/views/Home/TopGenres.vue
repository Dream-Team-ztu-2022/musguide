<template>
  <section>
    <h2 class="title">Топ жанрів</h2>
    <card-list>
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
      <card title="Український рок" subtitle="Топова рок музика та й ще й українською" preview="https://images.1plus1.video/playlist-1/157785/f1b85612e10765ceacdf5def51404314.220x330.jpg" />
    </card-list>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import CardList from '@/components/CardList.vue';
import Card from '@/components/Card.vue';

@Component({
  components: { CardList, Card },
})
export default class TopGenres extends Vue {}
</script>

<style lang="scss" scoped>
</style>
