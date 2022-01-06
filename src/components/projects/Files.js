import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Files extends Component {
    render() {
        const { file, user } = this.props

        return (
            <React.Fragment>
                <div className="card m-2">
                    <img className="card-img-top" src={`./static/images/${file.projectType}_image.png`} alt="Project" />
                    <div className="card-body">
                        <h5 className="card-title mb-2">{file.projectName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{file.username}</h6>
                        <p className="card-text mt-4">Type: <b>{file.projectType}</b></p>
                        <Link to={`/${file.projectType}/${file._id}`} className="btn btn-primary mr-2 mb-2">View Project</Link>
                        {user && user.name === file.username && <Link to={`/edit/${file._id}`}><button className="btn btn-danger mb-2">Edit</button></Link>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
