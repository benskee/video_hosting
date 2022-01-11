import React, { Component } from 'react';
import Tree from '../components/fileTree/FileTree';
import ReactPlayer from 'react-player/youtube';
import CodeDisplay from '../components/common/CodeDisplay';
const _ = require('lodash');
const treeData = require('../JSON/testFile.json');

export default class CodeTest extends Component {
    constructor() {
        super();
        function range(start, end) {
            var len = end - start + 1;
            var a = new Array(len);
            for (let i = 0; i < len; i++) a[i] = (start + i) * 5;
            return a;
        }
        this.state = {
            stampList: range(0, 50),
            playedSeconds: 0
        };
    }

    handleSelect = objectPath => {

        this.setState({ selectedFile: _.get(treeData, objectPath) });
    };

    handleProgress = state => {
        this.setState({
            playedSeconds: state.playedSeconds
        });
        if (!this.state.seeking) {
            this.setState(state);
        }
    };

    render() {
        const adjust = sec => {
            if (sec === 0) {
                return -1;
            }
            else if (sec < 23) {
                return 0;
            }
            else {
                return sec - 22;
            }
        };



        const { selectedFile, stampList } = this.state;
        const playedSeconds = adjust(this.state.playedSeconds);
        const currentTime = playedSeconds === -1 ? 0 : Math.max.apply(Math, stampList.filter(function (x) { return x <= playedSeconds; })) / 5;


        return (
            <div className='row'>
                <div className="col-md-3">
                    <Tree onSelect={this.handleSelect} selectedFile={selectedFile} currentTime={currentTime} treeData={treeData} />
                </div>
                <div className="col-md-9">
                    <div>
                        <ReactPlayer url="https://youtu.be/4RVfZKedCpI" onProgress={this.handleProgress} controls />
                    </div>
                    <div className="mt-4">
                        {selectedFile ? <CodeDisplay selectedFile={selectedFile} currentTime={currentTime} /> : <h3>Select a file to display.</h3>}
                    </div>
                </div>
            </div>
        );
    }
}
