import axios from 'axios';

const api = axios.create({
  baseURL: 'https://upload-freela.herokuapp.com/',
});

// const api = axios.create({
//   baseURL: 'http://localhost:3333/'
// baseURL: 'https://upload-freela.herokuapp.com/',

// });

export default api;
