<template>
  <div class="page">
    <p>
      Page number {{ page }}
      <a href="#" v-on:click="() => loadMore()">Load more...</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MoviePages',
  computed: mapState([
    'page',
  ]),
  props: [
    'loadMovies',
  ],
  methods: {
    async loadMore() {
      this.$store.commit('incrementPage');
      await this.loadMovies();
    },
  },
});
</script>

<style scoped>
.page {
  margin-top: 20px;
}
</style>
