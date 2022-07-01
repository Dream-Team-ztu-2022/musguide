import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Artist from '@/views/Artist.vue';
import SongDetails from '@/views/SongDetails.vue';
import Card from '@/components/Card.vue';
import CardList from '@/components/CardList.vue';
import Genres from '@/components/Genres.vue';
import HeaderControls from '@/components/HeaderControls.vue';
import NavBar from '@/components/NavBar.vue';
import Song from '@/components/Song.vue';
import App from '@/App.vue';

const components: Record<string, unknown> = {
  Home,
  Artist,
  SongDetails,
  Card,
  CardList,
  Genres,
  HeaderControls,
  NavBar,
  Song,
  App
};

Object.entries(components).forEach(([componentName, component]) => {
  describe(`${componentName}.vue`, () => {
    it('is mounted', () => {
      const wrapper = shallowMount(component, {});
      expect(wrapper).toBeTruthy();
    });
  });
});
