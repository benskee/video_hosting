import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container m-2">
                <div className='row'>
                    <div className="col-md-3 col-sm-6">
                        <div className="container mt-4">
                            <Link to='./code' style={{ textDecoration: 'none', color: 'black' }}>
                                <h3>Code Tutorial</h3>
                                {/* <h3 className='text-center' style={{ color: 'black'}}>Code Tutorial</h3> */}
                                <img alt=""  className="img-fluid pic-1" style={{ height: '150px' }} src={`./static/images/code_photo.png`}></img>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="container mt-3">
                            <Link to='./chart' style={{ textDecoration: 'none', color: 'black' }}>
                                <h3>Chart Decks</h3>
                                <img alt=""  className="img-fluid pic-1" style={{ height: '150px'}} src={`./static/images/chart_image.png`}></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}