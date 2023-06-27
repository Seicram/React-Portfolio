// auth.js

import api from "./api"; // Imports api from api.js

// Makes a request to the server to check if the user is logged in
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password }); // makes a request to the server to check if the user is logged in
    return response.data; // returns the response data
  } catch (error) {
    throw new Error(error.response.data.message); // throws an error if the user is not logged in
  }
};

// Makes a request to the server to check if the user is logged in
export const signup = async (username, email, password) => {
  try {
    const response = await api.post("/auth/signup", {
      username,
      email,
      password,
    }); // makes a request to the server to check if the user is logged in
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message); // throws an error if the user is not logged in
  }
};
// Makes a request to the server to check if the user is logged in
export const logout = async () => {
  try {
    await api.post("/auth/logout"); // makes a request to the server to check if the user is logged in
  } catch (error) {
    throw new Error(error.response.data.message); // throws an error if the user is not logged in
  }
};
