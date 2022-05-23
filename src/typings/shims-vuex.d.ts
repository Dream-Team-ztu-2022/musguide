// vuex.d.ts
/* eslint-disable */
import { Store } from 'vuex';
import { IRootStore } from '@/store/index';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IRootStore>;
  }
}
