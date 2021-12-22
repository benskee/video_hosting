import React, { Component } from 'react'
import Branch from '../common/Branch'
import Leaf from '../common/Leaf';

export default class Tree extends Component {

    render() {
        const { onSelect, selectedFile, currentTime, treeData } = this.props
        return (
            <ul className="fileTree">
                {Object.keys(treeData).map(branch => {
                    if (treeData[branch]["folder"] === true) {
                            return <Branch key={branch} treeData={treeData[branch]} branchName={branch} objectPath={branch}  onSelect={onSelect} selectedFile={selectedFile} currentTime={currentTime}/>
                        } else {
                            return <Leaf key={branch} name={branch} objectPath={branch} onSelect={onSelect} selectedFile={selectedFile} start={treeData[branch]['start']} currentTime={currentTime}/>
                            }
                        }
                )}
            </ul>
        )
    }
}
