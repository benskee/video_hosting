import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import Gif from '../components/animation/Gif'

export default class Animation extends Component {
    constructor() {
        super();
        this.state = {
            animationData: require('../dicts/animationDict.json'),
            playedSeconds: 0
        };
    }
    handleProgress = state => {
        {
            this.setState({
                playedSeconds: state.playedSeconds
            });
        }
        if (!this.state.seeking) {
            this.setState(state);
        }
    }
    render() {
        function adjust(sec) {
            if (sec === 0) {
                return -1;
            }
            else if (sec < 23) {
                return 0;
            }
            else {
                return sec - 22;
            }
        }
        const playedSeconds = this.state.playedSeconds;
        const animationData = this.state.animationData;
        const currentTime = Math.max.apply(Math, Object.keys(this.state.animationData).filter(function (x) { return x <= playedSeconds; }));
        const div1 = animationData[currentTime]["div1"];
        return (
            <div>
                <div className="container m-2">
                    
                    <div className="row">
                        <div className="col-12 row">
                            <div className="container col-8 mt-3">
                                <ReactPlayer url="https://youtu.be/0ZuHI-VW6oo" height="450px" width="800px" onProgress={this.handleProgress} controls />
                            </div>
                            <Gif currentTime={currentTime} animationData={animationData}/>
                        </div>
                    </div>
                </div>
                <div className="container col-6 float-start mt-3">
                    <p>{div1}</p>
                </div>
            </div>
        );
    }
}