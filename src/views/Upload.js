import React, { Component } from 'react'
import axios from 'axios'

export default class Upload extends Component {
    state = {
        selectedFile: null,
        files: [],
        userInput: { userName: '', mediaURL: '', projectName: '', projectType: '', timeAdjust: '' }
    };

    handleChange = ({ currentTarget: input }) => {
        const userInput = {...this.state.userInput}
        userInput[input.name] = input.value
        this.setState({ userInput })
    }

    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0],
        });
    };

    fileUploadHandler = async (e) => {
        e.preventDefault();
        const { userInput } = this.state;
        const data = new FormData();
        const userData = JSON.stringify(userInput)
        data.append('userInput', userData);
        data.append('file', this.state.selectedFile);
        await axios.post('http://localhost:5000/api/file', data);

        this.props.history.push("/projects");
    };

    render() {
        const { userInput } = this.state

        return (
            <div>
                <h1 className="m-3 mb-5" style={{ textAlign: "center" }}>Upload Project</h1>
                <form className="col-6 m-auto">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="userName">User Name</span>
                    <input value={userInput.userName} onChange={this.handleChange} name="userName" type="text" className="form-control" placeholder="User Name" aria-label="userName" aria-describedby="userName" />
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="mediaURL">Media URL</span>
                    <input value={userInput.mediaURL} onChange={this.handleChange} name="mediaURL" type="text" className="form-control" placeholder="Media URL" aria-label="mediaURL" aria-describedby="mediaURL" />
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="projectName">Project Name</span>
                    <input value={userInput.projectName} onChange={this.handleChange} name="projectName" type="text" className="form-control" placeholder="Project Name" aria-label="projectName" aria-describedby="projectName" />
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="timeAdjust">Time Adjust</span>
                    <input value={userInput.timeAdjust} onChange={this.handleChange} name="timeAdjust" type="text" className="form-control" placeholder="Time Adjust" aria-label="timeAdjust" aria-describedby="timeAdjust" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Project Type</label>
                        </div>
                        <select className="custom-select" value={userInput.projectType} onChange={this.handleChange} name="projectType" id="projectType">
                            <option >Choose...</option>
                            <option value="code">Code</option>
                            <option value="chartDeck">Chart Deck</option>
                            <option value="animation">Animation</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" name='file' encType="multipart/form-data" onChange={this.fileSelectedHandler} />
                    </div>
                    <button className="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>
                </form>
            </div>
        )
    }
}
