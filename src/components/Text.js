import React, { Component } from 'react';

export default class Text extends Component {
    render() {
        const currentTime = this.props.currentTime;
        const tab = this.props.tab;
        return (
                
                <div class="tab-pane fade" id={tab} role="tabpanel" aria-labelledby={tab + "-tab"}>
                    <h1>{tab}</h1>
                    <pre><code className="language-markup">
                        {this.props.tabData[currentTime]}
                    </code></pre>
                </div>
        )
    }
}
