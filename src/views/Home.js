import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import TextList from '../components/TextList';
import Tabs from '../components/Tabs';
import TabList from '../components/TabList';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            tabData: Tabs.tabData[0],
            stampList: [0,3,6]
        }
    }
    handleProgress = state => {
        {
            this.setState({
                playedSeconds: state.playedSeconds
            })
        }
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    render() {
        const playedSeconds = this.state.playedSeconds;
        const stampList = this.state.stampList;
        const currentTime = Math.max.apply(Math, stampList.filter(function (x) { return x <= playedSeconds }));
        const vals = Object.keys(this.state.tabData)
        return (
            <div className="container m-2">
                <div>
                    <ReactPlayer url="./static/videos/skeevideo.mp4" onProgress={this.handleProgress} controls />
                </div>
                <div className="border">
                    <TabList currentTime={currentTime} vals={vals} tabData={this.state.tabData}/>
                    <TextList currentTime={currentTime} vals={vals} tabData={this.state.tabData}/>
                </div>
            </div>
        )
    }
}