import axios from "axios";

export const api = axios.create({
  // baseURL: "http://testegabrielgalvao.com.iron.hostazul.com.br/api/v1",
  baseURL: "https://localhost:7157/api/v1",
});
