import React, { Component } from 'react';
import ReactPlayer from 'react-player/soundcloud'


export default class Chart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: require('../JSON/chart.json'),
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
    };
    render() {
        const { playedSeconds, chartData } = this.state
        const currentTime = Math.max.apply(Math, Object.keys(this.state.chartData).filter(function (x) { return x <= playedSeconds; }));
        const slide = chartData[currentTime]["slide"]
        const link = chartData[currentTime]["link"]
        return (
            <div className="container m-2">
                <ReactPlayer url="https://soundcloud.com/ben-skee-378863056/chart-deck" onProgress={this.handleProgress} controls />
                <br/>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className='chartImage'>
                        <img className='img-fluid' src={`./static/chartDeck/${slide}_bitstonker.png`} alt="" />
                    </div>
                </a>
            </div>
        );
    }
}