import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ImageLink extends Component {
    render() {
        const { link, label, image} = this.props
        return (
            <React.Fragment>
                <div className="col-md-3 col-sm-6">
                    <div className="container mt-4">
                        <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>{label}</h3>
                            <img alt="" className="img-fluid pic-1" style={{ height: '150px' }} src={`./static/images/${image}_image.png`}></img>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
