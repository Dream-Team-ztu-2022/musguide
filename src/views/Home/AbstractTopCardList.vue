<template>
  <section>
    <h2 class="title">{{listName}}</h2>
    <card-list>
      <card v-for="item in items" :key="getKey(item)"
        v-bind="cardListProps"
        :title="getTitle(item)"
        :subtitle="getSubtitle(item)"
        :preview="getImage(item)" />
    </card-list>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from '@smyld/vue-property-decorator';
import CardList from '@/components/CardList.vue';
import Card from '@/components/Card.vue';

@Component({
  components: { CardList, Card },
})
export default class AbstractTopCardList extends Vue {
  @Prop({ default: [] }) items!: unknown[];

  @Prop({ default: {} }) cardListProps!: Record<string, unknown>;

  @Prop({ default: `List name` }) listName!: string;

  @Prop({ default: (item: unknown) => JSON.stringify(item) })
  getKey!: (item: unknown) => string;

  @Prop({ default: () => `Title` })
  getTitle!: (item: unknown) => string;

  @Prop({ default: () => `Subtitle` })
  getSubtitle!: (item: unknown) => string;

  @Prop({ default: () => `#` })
  getImage!: (item: unknown) => string;
}
</script>
