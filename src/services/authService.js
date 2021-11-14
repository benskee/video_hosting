import jwtDecode from "jwt-decode";
import axios from 'axios';
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

// axios.setJwt(getJwt());

export async function login(username, password) {
  const { data: jwt } = await axios.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
}

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
//   getJwt
};