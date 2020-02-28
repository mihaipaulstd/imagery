import axios from 'axios';
import keys from './keys'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: keys.find(api => api.name == 'pexels').key
  }
});

export default instance;