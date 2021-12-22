import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import Tree from './FileTree';
import CodeDisplay from '../common/CodeDisplay';
const _ = require('lodash');


export default class CodeTest extends Component {
    constructor() {
        super();
        function range(start, end) {
            var len = end - start + 1;
            var a = new Array(len);
            for (let i = 0; i < len; i++) a[i] = (start + i)*5;
            return a;
        }
        this.state = {
            projectData: {},
            file: {},
            stampList: range(0, 50),
            playedSeconds: 0
        }
    }

    async componentDidMount() {
        const project = await axios.get(`http://localhost:5000/api/file/${this.props.match.params.id}`)
        this.setState({
            projectData: project.data.file.body,
            file: project.data.file
        })
    }

    handleSelect = objectPath => {

        this.setState({ selectedFile: _.get(this.state.projectData, objectPath)})
    }

    handleProgress = state => {
        this.setState({
            playedSeconds: state.playedSeconds
        })
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    adjust = (sec, timeAdjust) => {
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

        const { selectedFile, stampList, file, playedSeconds, projectData } = this.state
        const adjustedPlayedSeconds = this.adjust(playedSeconds, file.timeAdjust);
        const currentTime = adjustedPlayedSeconds === -1 ? 0 : Math.max.apply(Math, stampList.filter(function (x) { return x <= adjustedPlayedSeconds }))/5;
        

        return (
            <div className='row'>
                <div className="col-md-3">
                    <Tree onSelect={this.handleSelect} selectedFile={selectedFile} currentTime={currentTime} treeData={projectData}/>
                </div>
                <div className="col-md-9">
                    <div>
                        <ReactPlayer url={file.mediaURL} onProgress={this.handleProgress} controls />
                    </div>
                    <div className="mt-4">
                        {selectedFile ? <CodeDisplay selectedFile={selectedFile} currentTime={currentTime}/> : <h3>Select a file to display.</h3>}
                    </div>
                </div>
            </div>
        )
    }
}