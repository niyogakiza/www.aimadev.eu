<template>
  <div>
    <v-container grid-list>
      <v-layout wrap>
        <v-flex v-for="work in portfolio.works" :key="work.title"  lg="12" class="work pa-5 align-content-center">
          <Work :title="work.title" :description="work.description" :color="work.color" :image-url="work.imageUrl" :github-url="work.githubUrl" :website="work.website"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Work from '~/components/Work'
import portfolio from '~/assets/data/portfolio.json'
export default {
  data () {
    return {
      portfolio
    }
  },
  head () {
    return {
      title: 'Portfolio'
    }
  },
  components: { Work }
}
</script>
