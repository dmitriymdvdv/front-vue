<template>
  <div class="hello">
    <MovieFilters :loadMovies="loadMovies"></MovieFilters>
    <MovieListItem
      class="listItem"
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie"
      />
    <MoviePages :loadMovies="loadMovies"></MoviePages>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import MovieService from '@/services/MovieService';
import MovieListItem from './MovieListItem.vue';
import { Movie } from '../services/types';
import MovieFilters from './MovieFilters.vue';
import MoviePages from './MoviePages.vue';

export default Vue.extend({
  name: 'MovieList',
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  computed: mapState([
    'page',
    'filter',
  ]),
  async created() {
    await this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const { apiToken } = this.$store.state.user;
      const { page, filter } = this.$store.state;

      const result = await MovieService.movieService.getMovieList(apiToken, page, filter);

      this.movies = result.result;
    },
  },
  components: {
    MovieListItem,
    MovieFilters,
    MoviePages,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a, .listItem {
  cursor: pointer;
}
</style>
