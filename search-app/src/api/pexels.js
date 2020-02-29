import axios from 'axios/index'
import PEXELS_KEY from './keys/pexelsKey'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/',
  headers: {
    Authorization: PEXELS_KEY
  }
});

export default instance;