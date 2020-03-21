import axios from 'axios/index'
import PEXELS_KEYS from './keys/pexelsKeys'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/',
  headers: {
    Authorization: PEXELS_KEYS[0]
  }
});

export default instance;