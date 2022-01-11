import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import Gif from './Gif'
import DOMPurify from "dompurify"
import { getProject } from '../../services/codeProjectService';
const _ = require('lodash');


// THIS FEATURE IS NOT ACTIVE


export default class Animation extends Component {
    constructor() {
        super();
        this.state = {
            projectData: {},
            file: {},
            playedSeconds: 0
        };
    }

    async componentDidMount() {
        const project = await getProject(this.props.match.params.id);
        this.setState({
            projectData: project.body,
            file: project
        });
    }

    handleSelect = objectPath => {
        this.setState({ selectedFile: _.get(this.state.projectData, objectPath) });
    };

    handleProgress = state => {
        this.setState({
            playedSeconds: state.playedSeconds
        });
        if (!this.state.seeking) {
            this.setState(state);
        }
    }
    renderContainer(div) {
        if (div === '') return null;

        return <div className="container mw-100 mt-2 border border-dark" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(div) }} />;
    };

    render() {
        const { projectData, playedSeconds } = this.state;
        const currentTime = Math.max.apply(Math, Object.keys(this.state.projectData).filter(function (x) { return x <= playedSeconds; }));
        let div1 = ''
        projectData[currentTime] ? div1 = projectData[currentTime]["div1"] : div1 = ''

        return (
            <div>
                <div className="container m-2">
                    
                    <div className="row">
                        <div className="col-12 row">
                            <div className="container col-8 mt-3 py-2 border border-dark">
                                <ReactPlayer url="https://youtu.be/0ZuHI-VW6oo" width="100%" onProgress={this.handleProgress} controls />
                                {this.renderContainer(div1)}
                            </div>
                            <Gif currentTime={currentTime} projectData={projectData}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}