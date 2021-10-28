import React, { Component } from 'react'
import FileDisplay from '../components/projects/FileDisplay';

export default class ViewFiles extends Component {
    render() {
        return (
            <div>
                <h1 className="m-3 mb-5" style={{ textAlign: "center" }}>Available Projects</h1>
                <FileDisplay />
            </div>
        )
    }
}
