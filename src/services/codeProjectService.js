export function adjust(sec, timeAdjust, interval) {
    if (sec < timeAdjust) {
        return 0;
    }
    else {
        return Math.floor((sec - (timeAdjust - 1)) / interval);
    }
}

const codeProjectService = { 
    adjust
}

export default codeProjectService