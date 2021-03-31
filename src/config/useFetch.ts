import axios from "axios";
import { BASEURL } from "./constant";

const useFetch = axios.create({
  baseURL: BASEURL,
});
useFetch.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    if (localStorage.getItem("Access_Token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "Access_Token"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

useFetch.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  async function (err) {
    return err;
  }
);
export default useFetch;
