import { createStore } from 'vuex';
import { extractVuexModule, createModule } from 'vuex-class-component';
import { App } from './App';

export interface IRootStore {
  app: App;
}

export default createStore({
  modules: {
    ...extractVuexModule(App),
  },
});
