import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import Gif from './Gif'
import DOMPurify from "dompurify"
import axios from 'axios';

export default class Animation extends Component {
    constructor() {
        super();
        this.state = {
            projectData: {},
            playedSeconds: 0,
            file: {}
        };
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