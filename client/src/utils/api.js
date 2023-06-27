// api.js

import axios from "axios"; // axios is used to make HTTP requests from node.js

// Creates a new instance of axios with a custom config. Axios is a library that helps us make HTTP requests to external resources.
const api = axios.create({
  baseURL: "/api", // Replace with your server's API base URL
});

export default api;
