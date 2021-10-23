import React, { Component } from 'react'
import Text from './Text'

export default class TextList extends Component {
    render() {
            const currentTime = this.props.currentTime;
        return (
            <div className="tab-content" id="myTabContent">
                {this.props.vals.map(tab => <Text key={tab} currentTime={currentTime} tabData={this.props.tabData[tab]} tab={tab}/>)}
            </div>
        )
    }
}
