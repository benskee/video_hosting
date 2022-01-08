import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + "/file";

export const getData = async () => {
    let fileData = await axios.get(apiEndpoint);
    return fileData.data.files
}
