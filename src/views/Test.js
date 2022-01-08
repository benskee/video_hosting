import React, { Component } from 'react'
import axios from 'axios'
const apiEndpoint = process.env.REACT_APP_API_URL + "/file";


export default class Test extends Component {
    state = {
        data: { selectedFile: null }
    }

    fileSelectedHandler = e => {
        // let test = JSON.parse(e.target.files[0])
        // console.log(test)
        console.log(e.target.files[0]);
        const newData = { ...this.state.data };
        newData.selectedFile = e.target.files[0];
        this.setState({
            data: newData
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('file submit', this.state.data.selectedFile)
        let fileData = new FormData();
        fileData.append('file', this.state.data.selectedFile);
        axios.post(apiEndpoint + '/test', fileData)
        console.log('submitted')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="col-6 m-auto">

                    <div className="input-group mt-3">
                        <input type="file" name='selectedFile' id='selectedFile' encType="multipart/form-data" onChange={this.fileSelectedHandler} />
                    </div>
                    <button className="btn btn-primary mt-3">
                        submit
                    </button>
                </form>
            </div>
        )
    }
}
