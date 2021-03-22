// by Roberto Aleydon

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_FILM_API,
});

export default api;
