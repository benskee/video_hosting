import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
        const tab = this.props.tab;
        const currentTime = this.props.currentTime;
        const tabData = this.props.tabData;
        var startDisplay = "none"
        if (tabData[tab].start <= currentTime) {
            startDisplay = "block"
        }

        return (
                <li className="nav-item" role="presentation" style={{ display: startDisplay}}>
                    <button className="nav-link" id={ tab + "-tab"} data-bs-toggle="tab" data-bs-target={"#" + tab} type="button" role="tab" aria-controls={tab} aria-selected="false">{tab}</button>
                </li>
        )
    }
}
