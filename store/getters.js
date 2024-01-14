export default {
    getMovies(state){
        return state.movies;
    },
    getMovie(state){
        return state.movie;
    },
    getLoadingStatus(state){
        return state.loading;
    },
    getMovieTitle(state){
        var array = [];
        if(state.movies){
            state.movies.forEach(element => {
                array.push(element.Title);
            });
        }
        return array;
    }
}