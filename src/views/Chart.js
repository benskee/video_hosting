import React, { Component } from 'react';
import ReactPlayer from 'react-player'


export default class Chart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: require('../components/chart/chartDeck.json')
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
        const playedSeconds = this.state.playedSeconds;
        const currentTime = Math.max.apply(Math, Object.keys(this.state.chartData).filter(function (x) { return x <= playedSeconds; }));
        return (
            <div className="container m-2">
                <h1>Coming Soon!</h1>
                {/* <ReactPlayer url="./static/audio/macroVoices.mp3" onProgress={this.handleProgress} controls />
                <br/>
                <div>
                    <img src={`./static/chartDeck/cd${this.state.chartData[currentTime]}.png`} width="200" alt="" />
                </div> */}
            </div>
        );
    }
}