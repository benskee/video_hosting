import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import TextList from './TextList';
import TabList from './TabList';
import axios from 'axios'

export default class CodeTutorial extends Component {
    constructor() {
        super();
        function range(start, end) {
            var len = end - start + 1;
            var a = new Array(len);
            for (let i = 0; i < len; i++) a[i] = (start + i)*3;
            return a;
        }
        this.state = {
            // tabData: require('../../dicts/codeDict'),
            tabData: {},
            stampList : range(0, 50),
            file: {}
        }
    }
    componentDidMount = async () => {
    let fileData = await axios.get('http://localhost:5000/api/file/6171e746d72457097b292eb8');
    this.setState({
        file: fileData
    });
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
        console.log(this.state.file)
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
        const playedSeconds = adjust(this.state.playedSeconds);
        const stampList = this.state.stampList
        const currentTime = Math.max.apply(Math, stampList.filter(function (x) { return x <= playedSeconds }));
        const vals = Object.keys(this.state.tabData)
        return (
            <div className="container m-2">
                <div>
                    {/* <ReactPlayer url="https://youtu.be/4RVfZKedCpI" onProgress={this.handleProgress} controls /> */}
                    <h3>Player</h3>
                </div>
                <div>
                    <TabList currentTime={currentTime} vals={vals} tabData={this.state.tabData}/>
                    <TextList currentTime={currentTime} vals={vals} tabData={this.state.tabData}/>
                </div>
            </div>
        )
    }
}