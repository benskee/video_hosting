import React, { Component } from 'react';
import Joi from 'joi-browser';

export default class Login extends Component {
    state = {
        userInput: {userName: "", password: ""},
        errors: {}
    }

    schema = {
        userName: Joi.string().required().label('userName'),
        password: Joi.string().min(3).max(15).required(),
    }

    validate = () => {
        const result = Joi.validate(this.state.userInput, this.schema, { abortEarly: false })
        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const userInput = {...this.state.userInput}
        userInput[input.name] = input.value
        this.setState({userInput, errors})
    }

    handleLogin = e => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({errors: errors || {}})
        if (errors) return
        this.props.history.push("/projects");
    }


    render() {
        const { userInput, errors } = this.state
        return (
            <div>
                <h1 className='m-3 mb-5' style={{ textAlign: "center" }}>Login</h1>
                <form className="col-6 m-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="userName">User Name</span>
                        <input value={userInput.userName} onChange={this.handleChange} name="userName" type="text" className="form-control" placeholder="User Name" aria-label="userName" aria-describedby="userName" />
                    </div>
                    {errors.userName && <div className="alert alert-danger py-1">{errors.userName}</div> }
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="password">Password</span>
                        <input value={userInput.password} onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="password" />
                    </div>
                    {errors.password && <div className="alert alert-danger py-1">{errors.password}</div> }
                    <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
                </form>
            </div>
        )
    }
}
