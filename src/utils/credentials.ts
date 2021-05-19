import axios from "axios";

let API_URL = process.env.REACT_APP_DJANGO_URL_LIVE;

// GET TOKEN FROM LOCALSTORAGE
let pre_Token = localStorage.getItem("token");
let token = pre_Token ? JSON.parse(pre_Token) : null;

// AXIOS INSTANCE
export const axiosAPI = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    Authorization: token ? "Token " + token : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// AXIOS INSTANCE2
export const axiosAPI2 = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosAPI2.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  console.log(config.headers.Authorization);
  return config;
});
