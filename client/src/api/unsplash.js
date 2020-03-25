import axios from "axios/index";
import { ACCESS_KEY } from "./keys/unsplash";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});

export default instance;
