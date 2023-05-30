import axios from "axios";
import { authHeader, refreshData } from "./auth-header";

const API_URL = process.env.VUE_APP_API_ANCHOR_URL;

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use((config) => {
  config.headers = {
    Accept: "application/json",
    ...authHeader(),
  };
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      !["/api/auth", "/api/auth/refresh"].includes(originalRequest.url) &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return refreshAccessToken().then((accessToken) => {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
  try {
    const response = await http.post("/api/auth/refresh", refreshData());
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.access = response.data.access;
    localStorage.setItem("auth", JSON.stringify(auth));
    return auth.access;
  } catch (error) {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    console.error(error);
  }
}

export default http;
