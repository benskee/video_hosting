import React from 'react'
import Joi from 'joi-browser';
import axios from 'axios'
import Form from '../components/common/Form';
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
    
    async componentDidMount() {
       const { user } = this.props
       const { data } = this.state
        if (!user) {
           return this.props.history.push("/login");
        }

        const project = await axios.get(`http://localhost:5000/api/file/${this.props.match.params.id}`)
        const { file } = project.data
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
            console.log('here')
            await axios.delete(`http://localhost:5000/api/file/${this.props.match.params.id}`)
            
            this.props.history.push("/projects");
        } catch (err) {
            if(err.response && err.response.status === 404) {
                alert("File already deleted.")
            }
        }
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await axios.put(`http://localhost:5000/api/file/${this.props.match.params.id}`, data)
            
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
