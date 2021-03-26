import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
        const tab = this.props.tab;

        return (
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id={ tab.number + "-tab"} data-bs-toggle="tab" data-bs-target={"#" + tab.number} type="button" role="tab" aria-controls={tab.number} aria-selected="false">{tab.name}</button>
                </li>
        )
    }
}
