import React from 'react'
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import { deleteProject, getProject, updateProject } from '../services/editProjectService';
// import projectOptions from '../components/common/ProjectOptions'


export default class EditProject extends Form {
    state = {
        errors: {},
        data: { mediaURL: '', projectName: '', timeAdjust: '', interval: '' }
    };

    schema = {
        projectName: Joi.string().required().label('Project Name'),
        mediaURL: Joi.string().required().label('Media Url'),
        timeAdjust: Joi.number().required().label('Time Adjust'),
        interval: Joi.number().required().label('Interval')
    }
    
    id = this.props.match.params.id

    async componentDidMount() {
       const { user } = this.props
       const { data } = this.state
        if (!user) {
           return this.props.history.push("/login");
        }

        const file = await getProject(this.id)
        if (user.name !== file.username) {
            return this.props.history.push("/projects")
        }
        const newData = {...data}
        for (const attr in newData) { newData[attr] = file[attr]}
        this.setState({
            data: newData
        })
    }

    handleDelete = async () => {
        try {
            await deleteProject(this.id)
            
            this.props.history.push("/projects");
        } catch (err) {
            if(err.response && err.response.status === 404) {
                alert("File already deleted.")
            }
        }
    }

    doSubmit = async () => {
        try {
            await updateProject(this.id, this.state.data)
            
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
                <h1 className="m-3 mb-5">Edit Project</h1>

                <div className="col-6 m-auto">
                    <button className="btn btn-danger mb-4" onClick={() => this.handleDelete()}>Delete</button>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("mediaURL", "Media Url")}
                        {this.renderInput("projectName", "Project Name")}
                        {this.renderInput("timeAdjust", "Time Adjust")}
                        {this.renderInput("interval", "Interval")}
                        {this.renderButton("Submit")}
                    </form>
                </div>
            </div>
        )
    }
}
