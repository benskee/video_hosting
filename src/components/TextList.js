import React, { Component } from 'react'
import Tab from './Tab';
import Text from './Text'

export default class TextList extends Component {
    constructor() {
        super();
        this.state = {
           tabsList: [
            { 
                number:  "tab1", 
                name: "tab1.py",
                text: <code>
                    {`html {background: red; }`} < br />
                    {`body { color: blue; }`}<br />
                    </code >
            },
            { 
                number:  "tab2", 
                name: "this.js",
                text: <code>
                            {`<div id={file.number} class="tab-pane fade">`}<br/>
                                {`<h3 style={{ textAlign: 'center' }}>{file.name}</h3>`}<br/>
                                {`{file.text}`}<br/>
                            {`</div>`}<br/>
                        </code>
            },
            { 
                number:  "tab3", 
                name: "that.html",
                text: "this is tab 3 stamp ONE"
            }, 
            { 
                number:  "tab4", 
                name: "other.txt",
                text: <code>
                        {`<div>`} < br />
                            <tb/>{`< ul class= "nav nav-tabs" id="myTab" role="tablist" >`} <br/>
                            {`{ this.state.tabsList.map(tab => <Tab tab={tab} />) }`} <br/>
                        {`</ul>`} <br/>
                    </code>
            }],
        }
    };

    render() {
        // const playedSeconds = this.props.playedSeconds;
        // if (playedSeconds > 5 && playedSeconds < 10) {
        //     this.state.p1 = "block"
        // } else {
        //     this.state.p1 = "none"
        // }

        // if (playedSeconds >= 10 && playedSeconds < 15) {
        //     this.state.p2 = "block"
        // } else {
        //     this.state.p2 = "none"
        // }

        return (
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    {this.state.tabsList.map(tab => <Tab tab={tab} />)}
                </ul>
                <div class="container">
                    <div class="tab-content">
                        {this.state.tabsList.map(file => <Text file={file} />)}
                    </div>
                </div>
            </div>
        )
    }
}
