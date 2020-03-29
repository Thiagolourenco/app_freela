import axios from 'axios';

const api = axios.create({
  baseURL: 'https://upload-freela.herokuapp.com/',
});

export default api;
