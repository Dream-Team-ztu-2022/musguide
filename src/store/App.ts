import { createModule } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: 'app',
  strict: true,
});

export class App extends VuexModule {
  test = `Not OK :(`;
}
