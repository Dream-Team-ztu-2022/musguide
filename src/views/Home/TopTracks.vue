<template>
  <section>
    <h2 class="title">Топ треків</h2>
    <card-list>
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
      <card title="Кіно" subtitle="Антитіла" preview="https://i.ytimg.com/vi/B9gvM_-WYwo/maxresdefault.jpg" />
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
export default class TopTracks extends Vue {}
</script>

<style lang="scss" scoped>
</style>
