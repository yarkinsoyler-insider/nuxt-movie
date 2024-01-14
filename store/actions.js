import axios from 'axios'

export default {
    searchMovie({commit, state}, payload){
        commit('clearMovieList');
        commit('updateLoadingStatus', true);
        var searchQuery = '';
        if(payload.year != ''){
            if(payload.type != ''){
                searchQuery = `https://www.omdbapi.com/?s=${payload.title}&y=${payload.year}&type=${payload.type}&apikey=${state.apiKey}`
            }else {
                searchQuery = `https://www.omdbapi.com/?s=${payload.title}&y=${payload.year}&apikey=${state.apiKey}`
            }
        }else{
            if(payload.type != ''){
                searchQuery = `https://www.omdbapi.com/?s=${payload.title}&type=${payload.type}&apikey=${state.apiKey}`
            }else{
                searchQuery = `https://www.omdbapi.com/?s=${payload.title}&apikey=${state.apiKey}`
            }
        }
        axios.get(searchQuery)
            .then((result) => {
                commit('updateMovieList', result.data.Search);
                commit('updateLoadingStatus', false);
            });
    },
    findByIdMovie({commit,state}, payload){
        commit('updateLoadingStatus', true);
        axios.get(`https://www.omdbapi.com/?i=${payload}&apikey=${state.apiKey}`)
            .then((result) => {
                commit('updateMovie', result.data);
                commit('updateLoadingStatus', false);
            });
    },
    clearMovie({commit}){
        commit('clearMovie');
    }
}