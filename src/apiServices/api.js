// services/api.js
import axios from 'axios';

export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  console.log();
  return response.data.hits;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchArticlesWithQuery,
};
