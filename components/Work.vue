<template>
  <v-card class="card elevation-3">
    <v-card-media :src="imageUrl" height="150px"></v-card-media>
    <v-card-text :class="color" class="darken-3 white--text">
      <h3 class="title">{{ title }}</h3>
      <p v-html="description"></p>
    </v-card-text>
    <v-card-actions :class="color" class="darken-1 mt-0">
      <v-btn tag="a" flat  class="white--text" v-if="website" :href="website.url" target="_blank">{{ website.title }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn tag="a" icon  v-tooltip :top="{ html: 'Source code at Github'}" v-if="githubUrl" :href="githubUrl" target="_blank">
        <v-icon class="white--text">code</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'description', 'color', 'imageUrl', 'githubUrl', 'website']
}
</script>

<style scoped>
 .card {
   background: none;
 }
 .card .title {
    color: #fff;

  }
 .card a {
    text-decoration: none;
  }

</style>
