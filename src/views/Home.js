import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import TextList from '../components/TextList';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    handleProgress = state => {
        {
            this.setState({playedSeconds: state.playedSeconds})
        }
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    render() {
        return (
            <div className="container m-2">
                <div className="row">
                    <ReactPlayer url="./static/videos/skeevideo.mp4" onProgress={this.handleProgress} controls />
                    <div className="col-md-6 border">
                        <TextList playedSeconds={this.state.playedSeconds} />
                    </div>
                </div>
            </div>
        )
    }
}
