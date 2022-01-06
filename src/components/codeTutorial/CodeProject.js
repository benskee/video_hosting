import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import Tree from './FileTree';
import CodeDisplay from '../common/CodeDisplay';
import codeProjectService from '../../services/codeProjectService';
const _ = require('lodash');


export default class CodeProject extends Component {
    constructor() {
        super();
        this.state = {
            projectData: {},
            file: {},
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

    render() {

        const { selectedFile, file, playedSeconds, projectData } = this.state
        const currentTime = codeProjectService.adjust(playedSeconds, file.timeAdjust, file.interval);

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