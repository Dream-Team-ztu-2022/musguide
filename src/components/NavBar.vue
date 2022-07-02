<template>
  <nav>
    <img src="../assets/logo.svg" width="75" height="45" alt="logo" class="logo" @click="home" />
    <div class="search-box">
      <input v-model="search" type="search" placeholder="Пошук..."
        @input="updateSearch" @keydown.esc="clear" />
      <div v-show="search" class="suggestions">
        <search-suggestion v-for="item in foundSuggestions" :key="item.title + item.subtitle"
          :title="item.title"
          :subtitle="item.subtitle"
          :image="item.image"
          :route="item.route"
          @click="clear" />

        <search-suggestion v-if="!foundSuggestions.length" subtitle="Нічого не знайдено :(" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ScrobblerApi } from '@/api/ScrobblerApi';
import { Component, Vue } from '@smyld/vue-property-decorator';
import SearchSuggestion from './SearchSuggestion.vue';

interface ISuggestion {
  image: string;
  title: string;
  subtitle: string;
  route: string;
}

@Component({ components: { SearchSuggestion } })
export default class NavBar extends Vue {
  search = ``;

  foundSuggestions: ISuggestion[] = [];

  home() {
    this.$router.push(`/`);
  }

  clear() {
    this.search = ``;
  }

  async updateSearch() {
    try {
      const artists = await ScrobblerApi.searchArtist(this.search);

      const tracks = await ScrobblerApi.searchTrack(this.search);

      const suggestions: ISuggestion[] = [];

      artists.results.artistmatches.artist.forEach((artist) => {
        if (!artist.mbid) return;

        suggestions.push({
          image: ``,
          title: artist.name,
          subtitle: `Виконавець`,
          route: `/artist/${artist.url.split(`/`).pop()}`,
        });
      });

      tracks.results.trackmatches.track.forEach((track) => {
        if (!track.mbid) return;

        const [artistId, , trackId] = track.url.split(`/`).slice(-3);

        suggestions.push({
          image: ``,
          title: track.name,
          subtitle: `Трек - ${track.artist}`,
          route: `/track/${artistId}/${trackId}`,
        });
      });

      this.foundSuggestions = suggestions;
    } catch (e) {
      this.foundSuggestions = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .logo {
    margin: 30px;
    cursor: pointer;
  }

  .search-box {
    position: relative;
    width: 70%;

    input {
      width: 100%;
      height: 60px;
      background: #121212;
      border: 1px solid #302F2F;
      padding: 13px;
      color: #BDBDBD;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;

      &:focus {
        outline: none;
      }
    }

    .suggestions {
      position: absolute;
      top: 60px;
      left: 0;
      z-index: 20;
      border: 1px solid #302F2F;
      width: 100%;
      background: #121212;
      padding: 15px 30px;
      max-height: 90vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

}
</style>
