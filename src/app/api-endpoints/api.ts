const API_KEY = "89ba268a77bcd7778590826c4ed2edbf"

interface ApiReq {
  trending: string,
  netflixOrignals: string,
  topRated: string,
  action: string,
  horror: string,
  comedy: string,
  romance: string,
  documntry: string
}

const request: ApiReq = {
  trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOrignals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  horror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  romance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documntry: `discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;