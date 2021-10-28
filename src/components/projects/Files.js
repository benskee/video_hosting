import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Files extends Component {
    render() {
        const file = this.props.file
        return (
            <React.Fragment>
                <div className="card m2" style={{width: "18rem", margin:"5px"}}>
                    <img className="projectImage" src={"./static/images/code_photo.png"} alt="Project" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{file.projectName}</h5>
                        <h7 class="card-subtitle mb-2 text-muted">{file.userName}</h7>
                        <p className="card-text mt-4">Type: <b>{file.projectType}</b></p>
                        {file.projectType === 'code' ? <Link to={`/file/${file._id}`} className="btn btn-primary">View Project</Link> : <Link to={`/animation/${file._id}`} className="btn btn-primary">View Project</Link>}
                        {/* <Link to={`/file/${file.projecttype}/${file._id}`} className="btn btn-primary">View Project</Link> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
