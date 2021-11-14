import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import { register } from '../services/userService'
import auth from '../services/authService'

export default class Register extends Form {
    state = {
        data: { username: '', email: '', password: '', confirmPassword: '' },
        errors: {},
        submitted: false
    }

    schema = {
        username: Joi.string().required().label('Username'),
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().min(3).max(15).required().label('Password'),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
    }

    doSubmit = async () => {
        this.setState({ submitted: true })
        try {
            const response = await register(this.state.data);
            auth.loginWithJwt(response.headers["x-auth-token"])
            window.location = '/projects'
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
                <h1 className='m-3 mb-2'>Register</h1>
                <form onSubmit={this.handleSubmit} className="col-6 m-auto">
                    {this.renderInput("username", "Username")}
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderConfirmPassword("confirmPassword", "Confirm Password")}
                    {this.renderButton('Register')}
                </form>
            </div>
        )
    }
}
