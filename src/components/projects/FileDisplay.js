import React, { Component } from 'react'
import Files from './Files'
import axios from 'axios'

export default class FileDisplay extends Component {
    state = {
        files: []
    };

    componentDidMount = async () => {
        let fileData = await axios.get('http://localhost:5000/api/file');
        this.setState({
            files: fileData.data.files
        });
    }
    render() {
        return (
            <div>
                <ul className="row m3">
                    {this.state.files.length !== 0 && this.state.files.map(file => <Files key={file._id} file={file} />)}
                </ul>
            </div>
        )
    }
}
