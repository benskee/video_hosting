import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";

export function register(user) {
    return axios.post(apiEndpoint + '/register', user);
}