<template>
    <v-app style="height: 0px; margin-bottom:64px;">
      <v-app-bar light fixed shaped > 
        <v-app-bar-nav-icon @click="drawer = true">
           <v-icon class="movie-icon">mdi-movie-open</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="navbar-title">Movie App1</v-toolbar-title>
      </v-app-bar>
    </v-app>
</template>

<script>
  export default {

    data: () => ({

    })
  }
</script>

<style scoped>
  .navbar-title{
    font-size: 2em;
    font-weight: 400;
    margin: auto;
    padding-left: unset !important;
    padding-right: 36px;
  }
  .movie-icon {
    height: 36px ;
    font-size: 36px;
    width: 36px;
  }
</style>