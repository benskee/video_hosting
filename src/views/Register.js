import React, { Component } from 'react'
import Joi from 'joi-browser';

export default class Register extends Component {
    state = {
        userInput: { userName: '', email: '', password: '', confirmPassword: '' },
        errors: {},
        submitted: false
    }

    schema = {
        userName: Joi.string().required().label('userName'),
        email: Joi.string().required().email().label('email'),
        password: Joi.string().min(3).max(15).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
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
        this.setState({ userInput, errors, submitted: false })
    }

    handleRegister= e => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({ submitted: true, errors: errors || {} })
        if (errors) return

        this.props.history.push('/projects')
    }



    render() {
        const { userInput, errors, submitted } = this.state
        return (
            <div>
                <h1 className='m-3 mb-5' style={{ textAlign: "center" }}>Register</h1>
                <form className="col-6 m-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="userName">User Name</span>
                        <input value={userInput.userName} onChange={this.handleChange} name="userName" type="text" className="form-control" placeholder="User Name" label="userName" aria-describedby="userName" />
                    </div>
                    {errors.userName && <div className="alert alert-danger py-1">{errors.userName}</div> }
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="email">Email</span>
                        <input value={userInput.email} onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="email" />
                    </div>
                    {errors.email && <div className="alert alert-danger py-1">{errors.email}</div> }
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="password">Password</span>
                        <input value={userInput.password} onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" label="password" aria-describedby="password" />
                    </div>
                    {errors.password && <div className="alert alert-danger py-1">{errors.password}</div> }
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="confirmPassword">Confirm Password</span>
                        <input value={userInput.confirmPassword} onChange={this.handleChange} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" label="confirmPassword" aria-describedby="confirmPassword" />
                    </div>
                    {errors.confirmPassword && submitted && <div className="alert alert-danger py-1">{errors.confirmPassword}</div> }
                    <button disabled={this.validate()} className="btn btn-primary" onClick={this.handleRegister}>Register</button>
                </form>
            </div>
        )
    }
}
