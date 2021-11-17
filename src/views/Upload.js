import React from 'react'
import Joi from 'joi-browser';
import Form from '../components/common/Form';
// import auth from './../services/authService'
// import projectOptions from '../components/common/ProjectOptions'
import { upload, deleteFile } from './../services/uploadService';

export default class Upload extends Form {
    state = {
        errors: {},
        data: { username: '', selectedFile: null, mediaURL: '', projectName: '', projectType: 'code', timeAdjust: '' }
    };

    schema = {
        projectName: Joi.string().required().label('Project Name'),
        mediaURL: Joi.string().required().label('Media Url'),
        timeAdjust: Joi.number().required().label('Time Adjust'),
        selectedFile: Joi.object().required().error(() => {
            return {message: 'Please select a file to upload.'}})
        // projectOptions: Joi.string().required.label('projectOptions')
    }
    componentDidMount() {
        console.log(this.props)
        // const newData = {...this.state.data}
        // newData.username = this.props.user.name
        // this.setState({
        //     data: newData
        // });
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            deleteFile()
            upload(data)
            
            this.props.history.push("/projects");
        } catch (err) {
            if(err.response && err.response.status === 400) {
            const errors = { ...this.state.errors };
            const { type, message } = err.response.data
            errors[type] = message;
            this.setState({ errors })
            }
        }
    }

    render() {

        return (
            <div>
                <h1 className="m-3 mb-5" style={{ textAlign: "center" }}>Upload Project</h1>
                <form onSubmit={this.handleSubmit} className="col-6 m-auto">
                    {this.renderInput("mediaURL", "Media Url")}
                    {this.renderInput("projectName", "Project Name")}
                    {this.renderInput("timeAdjust", "Time Adjust")}
                    {/* {this.renderSelect("projectOptions", "Project Options", projectOptions)} */}
                    {this.renderFileSelect(this.state.errors.selectedFile)}
                    {this.renderButton("Submit")}
                </form>
            </div>
        )
    }
}
