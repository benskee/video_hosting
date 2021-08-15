import React, { Component } from 'react'
import Tab from './Tab'

export default class TabList extends Component {
    render() {
        const currentTime = this.props.currentTime;
        const tabData = this.props.tabData;
        const vals = this.props.vals
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {vals.map(tab => <Tab tab={tab} tabData={tabData} currentTime={currentTime}/>)}
                   {/* {vals.map(if (currentTime >= this.props.tabData.start) {tab => <Tab tab={tab} />)}} */}
                </ul>
            </div>
        )
    }
}
