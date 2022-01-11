import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + "/file";


export function upload(data) {
    const fileData = new FormData();
    fileData.append('file', data.selectedFile);
    const inputData = JSON.stringify(data)
    fileData.append('userInput', inputData);
    return axios.post(apiEndpoint + '/upload', fileData)
}

const uploadService = {
    upload
}
 
export default uploadService