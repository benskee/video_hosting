import React, { Component } from 'react'
import axios from 'axios'

export default class Upload extends Component {
    state = {
        selectedFile: null,
        files: [],
        userInput: { username: '', youtubeURL: '', projectname: '', projecttype: ''}
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
    };

    render() {
        const { userInput } = this.state

        return (
            <div>
                <h1 className="m-3 mb-5" style={{ textAlign: "center" }}>Upload Project</h1>
                <form className="col-6 m-auto">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="username">Username</span>
                    <input value={userInput.username} onChange={this.handleChange} name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" />
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="youtubeURL">Youtube URL</span>
                    <input value={userInput.youtubeURL} onChange={this.handleChange} name="youtubeURL" type="text" className="form-control" placeholder="Youtube URL" aria-label="youtubeURL" aria-describedby="youtubeURL" />
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="projectname">Project Name</span>
                    <input value={userInput.projectname} onChange={this.handleChange} name="projectname" type="text" className="form-control" placeholder="Project Name" aria-label="projectname" aria-describedby="projectname" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Project Type</label>
                        </div>
                        <select className="custom-select" value={userInput.projecttype} onChange={this.handleChange} name="projecttype" id="projecttype">
                            <option >Choose...</option>
                            <option value="code">Code</option>
                            <option value="chartDeck">Chart Deck</option>
                            <option value="annimation">Annimation</option>
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
