<template>
  <div class="home">
    <top-tracks />

    <top-artists />

    <top-genres />

    <section class="footer">
      <div class="row">Find us:
        <div class="icons">
          <a href="https://instagram.com/ng_band_zt" target="_blank">
            <img src="../assets/instagram.svg" width="30" alt="Instagram">
          </a>
          <a href="https://t.me/ng_band_zt" target="_blank">
            <img src="../assets/telegram.svg" width="30" alt="Telegram">
          </a>
          <a href="https://www.youtube.com/channel/UCFacVjadYSnEjtSHafNRC4g" target="_blank">
            <img src="../assets/youtube.svg" width="30" alt="YouTube">
          </a>
        </div>
      </div>
      <div class="row">ZTU Interactive &copy;2022 DreamTeam Ltd.
        All rights reserved.
        We Sell Your Personal Information.
        We're hiring! Look up our offers</div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@smyld/vue-property-decorator';
import TopTracks from './Home/TopTracks.vue';
import TopArtists from './Home/TopArtists.vue';
import TopGenres from './Home/TopGenres.vue';

@Component({
  components: {
    TopTracks,
    TopArtists,
    TopGenres,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 26px;

  & > section {
    margin: 0 15px;
  }

  .footer {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;;
    gap: 20px;

    .row {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
    }

    .icons {
      display: flex;
      flex-direction: row;
      align-items: center;;
      gap: 10px;
    }
  }
}
</style>
