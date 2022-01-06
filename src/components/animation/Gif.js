import React, { Component } from 'react'

export default class Gif extends Component {

    render() {
        const { projectData, currentTime } = this.props
        var gif = ''
        var link = '';
        
        projectData[currentTime] ? gif = projectData[currentTime]["gif"] : gif = ''
        projectData[currentTime] ? link = projectData[currentTime]["link"] : link = ''

        return (
            <div className="col-4" id= "gif">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={gif} alt="" />
                </a>
            </div>
        )
    }
}
