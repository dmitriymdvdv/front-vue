<template>
  <div class="movie-view">
    <h1>{{ movie.Title }}</h1>
    <img v-bind:src="movie.Poster" v-bind:alt="movie.Title"/>
    <p>{{ movie.Year }}, {{ movie.Production }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import { MovieDetail } from '@/services/types';

export default Vue.extend({
  name: 'MovieView',
  props: ['movieId'],
  data() {
    return {
      movie: {} as MovieDetail,
    };
  },
  async created() {
    const { apiToken } = this.$store.state.user;
    const movieID = this.movieId;

    this.movie = await MovieService.movieService.getSpecificMovie(apiToken, movieID);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
