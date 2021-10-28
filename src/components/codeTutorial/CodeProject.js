import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import TextList from './TextList';
import TabList from './TabList';
import axios from 'axios'

export default class CodeTutorial extends Component {
    constructor() {
        super();
        function range(start, end) {
            var len = end - start + 1;
            var a = new Array(len);
            for (let i = 0; i < len; i++) a[i] = (start + i)*3;
            return a;
        }
        this.state = {
            projectData: {},
            file: {},
            stampList : range(0, 50),
        }
    }
    async componentDidMount() {
    const project = await axios.get(`http://localhost:5000/api/file/${this.props.match.params.id}`)
    this.setState({
        projectData: project.data.file.body,
        file: project.data.file
    })
    }

    handleProgress = state => {
        this.setState({
            playedSeconds: state.playedSeconds
        })
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    adjust(sec, timeAdjust) {
            if (sec === 0) {
                return -1;
            }
            else if (sec < timeAdjust) {
                return 0;
            }
            else {
                return sec - (timeAdjust-1);
            }
        }

    render() {
        const { projectData, stampList, file, playedSeconds } = this.state
        const timeStamp = this.adjust(playedSeconds, file.timeAdjust);
        const currentTime = Math.max.apply(Math, stampList.filter(function (x) { return x <= timeStamp }));
        const vals = Object.keys(projectData)
        return (
            <div className="container m-2">
                <div>
                    <ReactPlayer url={file.mediaURL} onProgress={this.handleProgress} controls />
                </div>
                <div>
                    <TabList currentTime={currentTime} vals={vals} tabData={projectData}/>
                    <TextList currentTime={currentTime} vals={vals} tabData={projectData}/>
                </div>
            </div>
        )
    }
}