import axios from "axios";

export const api = axios.create({
  baseURL: "https://642e9ed58ca0fe3352d4798a.mockapi.io/api/v1",
});
