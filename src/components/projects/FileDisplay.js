import React, { Component } from 'react'
import Files from './Files'
import { getData } from '../../services/fileDisplayService';

export default class FileDisplay extends Component {
    state = {
        files: []
    };

    async componentDidMount() {
        let files = await getData()
        this.setState({
            files: files
        });
    }
    render() {
        return (
            <div>
                <ul className="row m3">
                    {this.state.files.length !== 0 && this.state.files.map(file => <Files key={file._id} file={file} user={this.props.user}/>)}
                </ul>
            </div>
        )
    }
}
