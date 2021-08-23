import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';

export default class Animation extends Component {
    constructor() {
        super();
        this.state = {
            animationData: require('../components/animation/animationDict.json'),
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
        const gif = animationData[currentTime]["gif"];
        const link = animationData[currentTime]["link"];
        return (
            <div className="container m-2">
                <div className="row">
                    <div className="col-12 row">
                        <div className="container col-8 mt-3">
                            <ReactPlayer url="https://youtu.be/4RVfZKedCpI" height="450px" width="800px" onProgress={this.handleProgress} controls />
                        </div>
                        <div className="col-4" style={{ marginLeft: "-100px", marginTop: "130px"}}>
                                {/* <img src="./static/animations/fairy.gif" alt="" /> */}
                            <a href="#" target="_blank">
                            {/* <a href={link} target="_blank"> */}
                                <img src={gif} alt="" />
                            </a>
                        </div>
                    </div>
                    <p>{div1}</p>
                </div>
            </div>
        );
    }
}