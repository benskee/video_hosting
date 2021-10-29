import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        userInput: {userName: "", password: ""}
    }

    handleChange = ({ currentTarget: input }) => {
        const userInput = {...this.state.userInput}
        userInput[input.name] = input.value
        this.setState({userInput})
    }

    handleLogin = e => {
        e.preventDefault();
        console.log("Logged In")
        this.props.history.push("/projects");
    }


    render() {
        const { userInput } = this.state
        return (
            <div>
                <h1 className='m-3 mb-5' style={{ textAlign: "center" }}>Login</h1>
                <form className="col-6 m-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="userName">User Name</span>
                        <input value={userInput.userName} onChange={this.handleChange} name="userName" type="text" className="form-control" placeholder="User Name" aria-label="userName" aria-describedby="userName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="password">Password</span>
                        <input value={userInput.password} onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="password" />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
                </form>
            </div>
        )
    }
}
