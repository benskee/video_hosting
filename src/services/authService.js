import jwtDecode from "jwt-decode";
import axios from 'axios';

const apiEndpoint = process.env.REACT_APP_API_URL + "/auth";
const tokenKey = "token";

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

setJwt(getJwt());

function getJwt() {
  return localStorage.getItem(tokenKey);
}

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

const authService = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
};

export default authService;