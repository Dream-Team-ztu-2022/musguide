<template>
  <h2 class="title">Топ виконавців</h2>
  <card-list>
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
    <card title="Imagine Dragons" subtitle="Виконавець" preview="https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s900-c-k-c0x00ffffff-no-rj" :round="true" />
  </card-list>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import CardList from '@/components/CardList.vue';
import Card from '@/components/Card.vue';

@Component({
  components: { CardList, Card },
})
export default class TopArtists extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
}
</style>
