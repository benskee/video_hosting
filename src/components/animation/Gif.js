import React, { Component } from 'react'

export default class Gif extends Component {

    render() {
        // const projectData = this.props.projectData
        // const currentTime = this.props.currentTime
        const { projectData, currentTime } = this.props;
        // const gif = projectData[currentTime]["gif"];
        // const link = projectData[currentTime]["link"];
        const pDcT = projectData[currentTime]
        let gif = ''
        pDcT ? gif = pDcT["gif"] : gif = ''
        console.log(gif)
        // pDcT ? [gif, link] = [pDcT["gif"], pDcT["link"]] : gif, link = ''
        return (
            <div className="col-4" style={{ marginLeft: "-100px", marginTop: "100px" }}>
                <img src="../../../public/static/animations/fairy.gif" alt="" />
                <a href='#' target="_blank" rel="noopener noreferrer">
                    <img src={gif} alt="" />
                </a>
            </div>
        )
    }
}
