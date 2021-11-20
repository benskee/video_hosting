import React, { Component } from 'react'

export default class Gif extends Component {

    render() {
        const { animationData, currentTime } = this.props
        const gif = animationData[currentTime]["gif"];
        const link = animationData[currentTime]["link"];
        
        return (
            <div className="col-4" id= "gif">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={gif} alt="" />
                </a>
            </div>
        )
    }
}
