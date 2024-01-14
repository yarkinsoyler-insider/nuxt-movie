<template>
  <v-container fluid>
    <v-toolbar dark color="blue darken-3" class="mb-1">
            <!-- <v-text-field v-model="search1" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Enter Title"></v-text-field> -->
            <v-autocomplete v-model="select"  :loading="loading" :items="items" :search-input.sync="search" cache-items prepend-inner-icon="mdi-magnify" class="mx-4" flat  hide-details label="Enter Movie Title"  solo-inverted ></v-autocomplete>
            <v-spacer></v-spacer>
            <v-select v-model="typeBy" :items="typeList" flat solo-inverted hide-details prepend-inner-icon="mdi-format-list-bulleted-type" label="Select Type" ></v-select>
            <v-spacer></v-spacer>
            <v-text-field v-model="yearBy" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-format-list-numbered" label="Enter year"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn large depressed color="blue" @click="searchMovies">Search</v-btn>
    </v-toolbar>

    <v-card class="movie-card" v-for="(movie) in getMovies" :key="movie.imdbID">
        <v-img :src="movie.Poster == 'N/A' ? noImage : movie.Poster" height="370px" width="100%"></v-img>
        <v-card-title class="card-title"> <b>TITLE :</b> {{movie.Title}} </v-card-title>
        <v-card-title class="card-title"> <b>TYPE :</b> {{movie.Type}} </v-card-title>
        <v-card-title class="card-title"> <b>YEAR :</b> {{movie.Year}} </v-card-title>
        <v-card-title class="card-title"> <b>IMDB ID :</b> {{movie.imdbID}} </v-card-title>
        <v-divider style="margin-bottom:10px:"></v-divider>
        <v-card-actions>
          <v-btn @click="moreDetails(movie.imdbID)">More Details</v-btn>
          <v-spacer></v-spacer>
          <v-btn> 
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
    
  </v-container>
</template>

<script>

//import axios from 'axios'
import { mapGetters} from 'vuex'

  export default {
    data () {
      return {
        search1: '',
        typeList: ['movie','series','episode'],
        typeBy: '',
        yearBy: '',
        noImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
        loading: false,
        items: [],
        search: null,
        select: null,
      }
    },
    computed: {
      ...mapGetters(['getMovies','getMovieTitle']),
      
    },
    methods: {
      searchMovies(){
        this.$store.dispatch('searchMovie',{
          title: this.search,
          type: this.typeBy,
          year: this.yearBy
        });
      },
      moreDetails(id){
        this.$store.dispatch('findByIdMovie',id);
        this.$router.push({name : 'movieDetail'})
      },
      querySelections (v) {
        this.loading = true
        setTimeout(() => {
          this.items = this.getMovieTitle.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    }
  }
</script>

<style scoped>
  .movie-card {
    display: inline-block;
    margin: auto;
    width: calc(100%/5.4);
    margin: 10px;
  }
  .image-container {
    padding: 10px;
  }
  .card-title {
    font-size: 14px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 6px 0px 4px 10px;
  }

  .theme--light.v-list-item .v-list-item__mask {
    color: rgba(0, 0, 0, 0.38);
    background: yellow;
  }
</style>