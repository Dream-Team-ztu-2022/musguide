import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Artist from '../views/Artist.vue';
import SongDetails from '../views/SongDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: `/artist/:mbid`,
    name: `Artist`,
    component: Artist,
    props: true,
  },
  {
    path: `/track/:mbid`,
    name: `Track`,
    component: SongDetails,
  },
  {
    path: `/`,
    name: `Home`,
    component: Home,
    meta: {
      keepAlive: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
