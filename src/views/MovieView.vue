<template>
  <div class="movie-view">
    <h1>This is the movie view</h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MovieService from '@/services/MovieService';
import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieView',
  data() {
    return {
      movie: {
        type: Object,
      } as PropOptions<Movie>,
    };
  },
  async created() {
    console.log(this.movie.imdbID);
    MovieService.movieService.getSpecificMovie(/* TODO */ '273b9080', /* TODO */ 'tt0372784');
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
