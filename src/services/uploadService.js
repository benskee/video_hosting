import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/file";

export function upload(data) {
    const fileData = new FormData();
    fileData.append('file', data.selectedFile);
    const inputData = JSON.stringify(data)
    fileData.append('userInput', inputData);
    return axios.post(apiEndpoint + '/upload', fileData)
}

export function deleteFile() {
    return axios.delete(apiEndpoint + '/delete');
}
    
const uploadService = {
    upload,
    deleteFile
}
 
export default uploadService