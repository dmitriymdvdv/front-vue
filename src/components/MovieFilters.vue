<template>
  <div class="filters">
    <input id="series" name="filter" type="radio" v-bind:checked="filter === 'series'"
           value="Series"
           v-on:click="() => setFilter('series')">
    <label for="series">Series</label>
    <input id="movies" name="filter" type="radio" v-bind:checked="filter === 'movie'"
           value="Movies"
           v-on:click="() => setFilter('movie')">
    <label for="movies">Movies</label>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MovieFilters',
  computed: mapState([
    'filter',
  ]),
  props: [
    'loadMovies',
  ],
  methods: {
    async setFilter(filter: string) {
      this.$store.commit('changeFilter', filter);
      await this.loadMovies();
    },
  },
});
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
}
</style>
