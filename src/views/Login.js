import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import auth from '../services/authService'

export default class Login extends Form {
    state = {
        data: {username: "", password: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('username'),
        password: Joi.string().min(3).max(15).required(),
    }

    doSubmit = async () => {
        try {
            const { data } = this.state
            await auth.login(data.username, data.password)
            window.location = '/projects'
        } catch (err) {
            if (err.response && err.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.username = err.response.data;
                this.setState({ errors })
            }            
        }
    }


    render() {
        return (
            <div>
                <h1 className='m-3 mb-5'>Login</h1>
                <form onSubmit={this.handleSubmit} className="col-6 m-auto">
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton('Login')}
                </form>
            </div>
        )
    }
}
