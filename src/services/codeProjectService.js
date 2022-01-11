import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + '/file';

export const getProject = async (id) => {
    let project = await axios.get(apiEndpoint + '/' + id)
    return project.data.file
}

export function adjust(sec, timeAdjust, interval) {
    if (sec < timeAdjust) {
        return 0;
    }
    else {
        return Math.floor((sec - (timeAdjust - 1)) / interval);
    }
}

const codeProjectService = { 
    adjust,
    getProject
}

export default codeProjectService