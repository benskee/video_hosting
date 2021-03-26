import React, { Component } from 'react'

export default class Text extends Component {
    render() {
        const file= this.props.file;
        
        return (
            <div id={file.number} class="tab-pane fade">
                <h3 style={{ textAlign: 'center' }}>{file.name}</h3>
                {file.text}
            </div>
        )
    }
}
