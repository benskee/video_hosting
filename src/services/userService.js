import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    return axios.post(apiEndpoint + '/register', user)
}