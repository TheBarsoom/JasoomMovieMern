const baseUrl = "https://api.themoviedb.org/3/";
const key ="185ee3a9083112f300c90a61dd26cac0"

// const baseUrl = process.env.TMDB_BASE_URL;
// const key = process.env.TMDB_KEY;
// https://api.themoviedb.org/3/
// 185ee3a9083112f300c90a61dd26cac0
// TMDB_BASE_URL=https://api.themoviedb.org/3/
// TMDB_KEY=185ee3a9083112f300c90a61dd26cac0
const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };