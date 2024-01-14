<template>
    <v-card class="details-card">
        <v-row>
            <v-col sm="6" style="padding:0px 12px">
                <div class="card-image">
                    <v-img :src="movie.Poster == 'N/A' ? noImage : movie.Poster" width="500px" ></v-img>
                </div>
            </v-col>
            <v-col sm="6" style="padding:20px">
                <v-card-title class="card-title"><b>Title :</b> {{movie.Title}}</v-card-title>
                <v-card-title class="card-title"><b>Actors :</b> {{movie.Actors}}</v-card-title>
                <v-card-title class="card-title"><b>Awards :</b> {{movie.Awards}}</v-card-title>
                <v-card-title class="card-title"><b>BoxOffice :</b> {{movie.BoxOffice}}</v-card-title>
                <v-card-title class="card-title"><b>Country :</b> {{movie.Country}}</v-card-title>
                <v-card-title class="card-title"><b>DVD :</b> {{movie.DVD}}</v-card-title>
                <v-card-title class="card-title"><b>Director :</b> {{movie.Director}}</v-card-title>
                <v-card-title class="card-title"><b>Genre :</b> {{movie.Genre}}</v-card-title>
                <v-card-title class="card-title"><b>Language :</b> {{movie.Language}}</v-card-title>
                <v-card-title class="card-title"><b>Metascore :</b> {{movie.Metascore}}</v-card-title>
                <v-card-title class="card-title"><b>Rated :</b> {{movie.Rated}}</v-card-title>
                <v-card-title class="card-title"><b>Released :</b> {{movie.Released}}</v-card-title>
                <v-card-title class="card-title"><b>Runtime :</b> {{movie.Runtime}}</v-card-title>
                <v-card-title class="card-title"><b>Type :</b> {{movie.Type}}</v-card-title>
                <v-card-title class="card-title"><b>Writer :</b> {{movie.Writer}}</v-card-title>
                <v-card-title class="card-title"><b>imdbID :</b> {{movie.imdbID}}</v-card-title>
                <v-card-title class="card-title"><b>imdbRating :</b> {{movie.imdbRating}}</v-card-title>
                <v-card-title class="card-title"><b>imdbVotes :</b> {{movie.imdbVotes}}</v-card-title>
                <v-card-title class="card-title"><b>Rating List :</b></v-card-title>
                <v-card-title v-for="rate in movie.Ratings" :key="rate.Value" class="card-title list-title">
                    <b>Source :</b> {{rate.Source}} 
                    <b>Value :</b> {{rate.Value}} 
                </v-card-title>
                <v-divider style="margin:20px 0"></v-divider>
                <v-card-actions>
                    <v-btn block @click="backList">Back List</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'movieDetail',
    data : function(){
        return{
            noImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
        }
    },
    computed : {
        ...mapGetters({movie : 'getMovie'})
    },
    methods : {
        backList(){
            this.$router.back();
            this.$store.dispatch('clearMovie')
        }
    }
}
</script>

<style>
    .details-card {
        width: 1000px;
        margin: auto;
        margin-top:100px;
    }
    .card-title{
        font-size: 16px;
        font-weight: normal;
        line-height: 1rem;
        word-break: break-word;
        display: block;
        padding: 6px;
    }
    .list-title{
        display: list-item;
        margin-left: 22px;
    }

    .card-image{
        padding: 5px;
        width: 100%;
    }
</style>