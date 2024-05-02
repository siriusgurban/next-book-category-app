import axios from 'axios'

export const instanceAxios = axios.create({
  baseURL:
    // 'https://api.themoviedb.org/3/movie/550?api_key=83c38445714fc8a04070abef1b19e665',
    // 'https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=83c38445714fc8a04070abef1b19e665',
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=drama&api_key=83c38445714fc8a04070abef1b19e665',
})
