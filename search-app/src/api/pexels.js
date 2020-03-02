import axios from 'axios/index'
import PEXELS_KEYS from './keys/pexelsKeys'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/',
  headers: {
    Authorization: PEXELS_KEYS[2]
  }
});

export default instance;