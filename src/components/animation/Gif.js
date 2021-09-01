import React, { Component } from 'react'

export default class Gif extends Component {

    render() {
        const animationData = this.props.animationData
        const currentTime = this.props.currentTime
        const gif = animationData[currentTime]["gif"];
        const link = animationData[currentTime]["link"];
        return (
            <div className="col-4" style={{ marginLeft: "-100px", marginTop: "100px" }}>
                {/* <img src="./static/animations/fairy.gif" alt="" /> */}
                <a href={link} target="_blank">
                    <img src={gif} alt="" />
                </a>
            </div>
        )
    }
}
