import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const apiEndpoint = "/users";

export function register(user) {
    return axios.post(apiEndpoint + '/register', user);
}