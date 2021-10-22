import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Files extends Component {
    render() {
        const file = this.props.file
        console.log(file.projectname)
        return (
            <React.Fragment>
                <div className="card m2" style={{width: "18rem", margin:"5px"}}>
                    <img className="projectImage" src={"./static/images/code_photo.png"} alt="Project" />
                    <div className="card-body">
                        <h5 className="card-title">{file.projectname}</h5>
                        <p className="card-text">{file.username}</p>
                        <Link to="#" className="btn btn-primary">View Project</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
