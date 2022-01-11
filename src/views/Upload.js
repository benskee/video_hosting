import React from 'react'
import Joi from 'joi-browser';
import Form from '../components/common/Form';
// import projectOptions from '../components/common/ProjectOptions'
import { upload } from './../services/uploadService';

export default class Upload extends Form {
    state = {
        errors: {},
        data: { username: '', selectedFile: null, mediaURL: '', projectName: '', projectType: 'code', timeAdjust: 0, interval: 5 }
    };

    schema = {
        username: Joi.string().required().label('Username'),
        projectName: Joi.string().required().label('Project Name'),
        mediaURL: Joi.string().required().label('Media Url'),
        projectType: Joi.string().required().label('Project Type'),
        timeAdjust: Joi.number().required().label('Time Adjust'),
        interval: Joi.number().required().label('Interval'),
        selectedFile: Joi.object().required().error(() => {
            return {message: 'Please select a file to upload.'}})
        // projectOptions: Joi.string().required.label('projectOptions')
    }
    componentDidMount() {
       const { user } = this.props
        if (!user) {
           return this.props.history.push("/login");
        }
        const newData = {...this.state.data}
        newData.username = user.name
        this.setState({
            data: newData
        });
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await upload(data)
            
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
                <h1 className="m-3 mb-5">Upload Project</h1>
                <form encType="multipart/form-data" onSubmit={this.handleSubmit} className="col-6 m-auto">
                    {this.renderInput("mediaURL", "Media Url")}
                    {this.renderInput("projectName", "Project Name")}
                    {this.renderInput("timeAdjust", "Time Adjust")}
                    {this.renderInput("interval", "Interval")}
                    {/* {this.renderSelect("projectOptions", "Project Options", projectOptions)} */}
                    {this.renderFileSelect(this.state.errors.selectedFile)}
                    {this.renderButton("Submit")}
                </form>
            </div>
        )
    }
}
