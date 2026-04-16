import axios from "axios";

const baseURL = import.meta.env.PUBLIC_URL_API || "http://localhost:4000/api";

const client = axios.create({
  baseURL
});

export default client;
