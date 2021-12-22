import React, { Component } from 'react'
import Tab from './Tab'

export default class TabList extends Component {
    render() {
        const currentTime = this.props.currentTime;
        const tabData = this.props.tabData;
        const vals = this.props.vals
        return (
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {vals.map(tab => <Tab key={tab} tab={tab} tabData={tabData} currentTime={currentTime}/>)}
                </ul>
        )
    }
}
