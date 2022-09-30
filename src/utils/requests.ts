  const API_KEY = '8e603f5908c1d03d7642b2f9697a7715'
  const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
    fetchMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR`,
    fetchMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR`,
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`,
  }
  
  export default requests