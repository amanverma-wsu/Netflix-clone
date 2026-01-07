const key='57ca3c1bdddbe8f585e4832298ecd70d'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&query=horror&include_adult=false&include_video=false&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests