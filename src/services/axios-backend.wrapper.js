import axios from "axios";

const API_URL = process.env.VUE_APP_API_BACKEND_URL;
const TOKEN = process.env.VUE_APP_API_BACKEND_TOKEN;

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use((config) => {
  config.headers = {
    Accept: "application/json",
    Authorization : `Bearer ${TOKEN}`,
  };
  return config;
});

export default http;
