import axios from 'axios/index'
import keys from './keys'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/',
  headers: {
    Authorization: keys.find(api => api.name == 'pexels').key
  }
});

export default instance;