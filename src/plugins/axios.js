import axios from 'axios';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const axios$ = axios.create(config);

axios$.interceptors.request.use(
  config => config,
  error => {
    throw new Error(error)
  }
);

axios$.interceptors.response.use(
  async response => response,
  async error => {
    throw new Error(error)
  }
);
const lol = '123';
export {
  axios$ as axios,
  lol
}