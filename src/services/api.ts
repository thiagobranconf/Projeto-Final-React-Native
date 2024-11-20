import axios from "axios";

const api = axios.create({
  baseURL: "https://673d38af0118dbfe86068bf8.mockapi.io/nl/",
});

export default api;
