import React, { Component } from 'react';
import ImageLink from '../components/common/ImageLink';

export default class Home extends Component {
    render() {
        return (
            <div className="container m-2">
                <h1>Welcome to Fifth Wall Media<br /><br /></h1>
                <div className='row'>
                    <ImageLink link='./code' label='Code' image='code' />
                    <ImageLink link='./chart' label='Chart Deck' image='chartDeck' />
                    <ImageLink link='./code' label='Code' image='animation' />
                </div>
            </div>
        );
    }
}