import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import Gif from '../components/animation/Gif'
import DOMPurify from "dompurify"

export default class Animation extends Component {
    constructor() {
        super();
        this.state = {
            animationData: require('../JSON/animation.json'),
            playedSeconds: 0
        };
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
        const { playedSeconds, animationData } = this.state
        const currentTime = Math.max.apply(Math, Object.keys(this.state.animationData).filter      (function (x) { return x <= playedSeconds; }));
        const div1 = animationData[currentTime]["div1"];

        return (
            <div>
                <div className="container m-2">
                    
                    <div className="row">
                        <div className="col-12 row">
                            <div className="container col-8 mt-3 py-2 border border-dark">
                                <ReactPlayer url="https://youtu.be/0ZuHI-VW6oo" width="100%" onProgress={this.handleProgress} controls />
                                {this.renderContainer(div1)}
                            </div>
                            <Gif currentTime={currentTime} projectData={animationData}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}