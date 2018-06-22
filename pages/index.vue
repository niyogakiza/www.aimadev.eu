<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="align-content justify-center centered">
          <v-card class="elevation-3">
            <v-card-text class="text-xs-center">
              <img src="../assets/image/myImage.jpg" alt="Photo of Aimable Niyogakiza" id="avatar"/>
              <h1 class="headline  mt-3">Aimable Niyogakiza</h1>
              <h2 class="title">Fullstack Javascript Developer</h2>
              <p id="location">
                <v-icon>place</v-icon>
                <span>Solihull - England</span>
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12 class="text-xs-center mt-3">
          <v-btn tag="a" href="/cv.pdf"  target="_blank" class="deep-orange white--text">
            <v-icon left>picture_as_pdf</v-icon>
            CV
          </v-btn>
          <v-btn tag="a" href="https://github.com/niyogakiza" target="_blank" class="green white--text" secondary>
            <v-icon left>code</v-icon>
            GitHub
          </v-btn>
          <v-btn tag="a" href="https://www.linkedin.com/in/niyogakiza-a-38386247/" target="_blank" class="purple white--text" secondary>
            <v-icon>work</v-icon>
            Linkedin
          </v-btn>
          <v-btn tag="a" href="https://twitter.com/AimadevSoft" target="_blank" class="light-blue white--text" secondary>
            <v-icon left>account_circle</v-icon>
            Twitter
          </v-btn>
          <v-btn  to="/portfolio" class="black white--text">
            <v-icon left>dashboard</v-icon>
            Portfolio
          </v-btn>
          <v-btn tag="a" :href="'mailto:' + ['aimadev.soft','gmail.com'].join('@')" class="red white--text">
            <v-icon left>email</v-icon>
            E-mail
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {

  head () {
    return {
      title: 'Hey!'
    }
  }
}
</script>

<style scoped>
  .centered {
    margin: auto;
  }




  #avatar {
    display: list-item;
    width: 50%;
    margin: auto;
    border-radius: 100%;
  }
  #location span {
    display: block;
  }
  .title {
    font-weight: 300;
  }

</style>
