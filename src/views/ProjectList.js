import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FileDisplay from '../components/projects/FileDisplay';

export default class ViewFiles extends Component {
    render() {
        return (
            <div>
                <h1>Available Projects</h1>
                <Link to='/'>
                    <h2>Home</h2>
                </Link>
                <FileDisplay />
            </div>
        )
    }
}
