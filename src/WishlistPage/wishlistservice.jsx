import axios from 'axios';

const API_URL = 'http://localhost:8080/api/wishlist';

const addWishlistItem = (item) => {
  return axios.post(`${API_URL}/add`, item);
};

const removeWishlistItem = (id) => {
  return axios.delete(`${API_URL}/remove/${id}`);
};

const getWishlist = () => {
  return axios.get(API_URL);
};

export default {
  addWishlistItem,
  removeWishlistItem,
  getWishlist
};
