<template>
  <nav>
    <img src="../assets/logo.svg" width="75" height="45" alt="logo" class="logo"/>
    <div class="search-box">
      <input v-model="search" type="search" placeholder="Пошук..." @input="updateSearch" />
      <div v-show="search" class="suggestions">
        <search-suggestion v-for="item in foundSuggestions" :key="item.title + item.subtitle"
          :title="item.title"
          :subtitle="item.subtitle"
          :image="item.image" />

        <search-suggestion v-if="!foundSuggestions.length" subtitle="Нічого не знайдено :(" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ScrobblerApi } from '@/api/ScrobblerApi';
import { DEFAULT_AVATAR } from '@/constants';
import { Component, Vue } from '@smyld/vue-property-decorator';
import SearchSuggestion from './SearchSuggestion.vue';

interface ISuggestion {
  image: string;
  title: string;
  subtitle: string;
}

@Component({ components: { SearchSuggestion } })
export default class NavBar extends Vue {
  search = ``;

  foundSuggestions: ISuggestion[] = [];

  async updateSearch() {
    const artists = await ScrobblerApi.searchArtist(this.search);

    const tracks = await ScrobblerApi.searchTrack(this.search);

    const suggestions: ISuggestion[] = [];

    artists.results.artistmatches.artist.forEach((artist) => {
      suggestions.push({
        image: artist.image[0][`#text`] || DEFAULT_AVATAR,
        title: artist.name,
        subtitle: `Виконавець`,
      });
    });

    tracks.results.trackmatches.track.forEach((track) => {
      suggestions.push({
        image: track.image[0][`#text`] || DEFAULT_AVATAR,
        title: track.name,
        subtitle: `Трек - ${track.artist}`,
      });
    });

    this.foundSuggestions = suggestions;
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
      font-family: 'Source Sans Pro';
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
      z-index: 2;
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
