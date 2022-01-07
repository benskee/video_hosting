import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndpoint = "/file";


export const getData = async () => {
    let fileData = await axios.get(apiEndpoint);

    return fileData.data.files
}
