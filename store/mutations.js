export default {
    updateMovieList(state, movieList) {
        state.movies = movieList;
    },
    updateMovie(state, movie){
        state.movie = movie
    },
    clearMovie(state){
        state.movie = null;
    },
    updateLoadingStatus(state,payload){
        state.loading = payload;
    },
    clearMovieList(state){
        state.movieList = null;
    }
}