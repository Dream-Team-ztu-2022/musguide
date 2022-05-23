import { createStore } from 'vuex';
import { extractVuexModule, createModule } from 'vuex-class-component';

const VuexModule = createModule({
  strict: true,
});

export class App extends VuexModule {
  test = 'Not OK :(';
}

export interface IRootStore {
  app: App;
}

export default createStore({
  modules: {
    ...extractVuexModule(App),
  },
});
