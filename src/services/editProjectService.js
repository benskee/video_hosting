import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + '/file/';

export const getProject = async (id) => {
    let project = await axios.get(apiEndpoint + id);
    return project.data.file;
};

export const updateProject = async (id, data) => {
    await axios.put(apiEndpoint + id, data)
}

export const deleteProject = async (id) => {
    await axios.delete(apiEndpoint + id)
}