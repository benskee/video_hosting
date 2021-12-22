import React, { Component } from 'react'

export default class CodeDisplay extends Component {
    render() {
        const highestValue = (data, time) => {
            var nums = Object.keys(data).map( n => parseInt(n))
            var max = nums.reduce(function(a, b) {
                return Math.max(parseInt(a), parseInt(b));
            }, 0);
            if(max < time) {
                return max
            }
            return Math.max.apply(Math, nums.filter(function (x) { return x <= time }))
        }


        const { selectedFile, currentTime } = this.props
        var code = selectedFile.stamps[highestValue(selectedFile.stamps, currentTime)]
        return (
            <div>
                {code ? <div>
                    <h3>{selectedFile.name} <br/><br/></h3> 
                    <pre><code className="language-markup">{JSON.parse(selectedFile.stamps[highestValue(selectedFile.stamps, currentTime)])}</code></pre>
                </div> : null}
            </div>
        )
    }
}
