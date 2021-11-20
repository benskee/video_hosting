import React, { Component } from 'react'
import FileDisplay from '../components/projects/FileDisplay';

export default class ProjectList extends Component {
    render() {
        return (
            <div>
                <h1 className="m-3 mb-5">Available Projects</h1>
                <FileDisplay user={this.props.user}/>
            </div>
        )
    }
}
