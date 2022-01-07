import React, { Component } from 'react'
import Files from './Files'
// import axios from 'axios'
import { getData } from './../../services/fileDisplayService';

export default class FileDisplay extends Component {
    state = {
        files: []
    };

    componentDidMount = () => {
        this.setState({
            files: getData()
        });
    }
    render() {
        return (
            <div>
                {}
                {/* <ul className="row m3">
                    {this.state.files.length !== 0 && this.state.files.map(file => <Files key={file._id} file={file} user={this.props.user}/>)}
                </ul> */}
            </div>
        )
    }
}
