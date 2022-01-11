import React, { Component, Fragment } from 'react';
import Leaf from './Leaf';


export default class Branch extends Component {

    handleArrowClick = (e) => {
        e.target.classList.toggle("folder-down");
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
    };

    render() {
        const { treeData, branchName, objectPath, onSelect, selectedFile, currentTime } = this.props;
        return (

            <Fragment>
                {treeData.start <= currentTime ? <li>
                    <span className="folder" onClick={this.handleArrowClick}>{branchName}</span>
                    <ul className="nested">
                        {Object.keys(treeData).map(name => {
                            if (!['folder', 'start'].includes(name)) {
                                if (treeData[name]["folder"] === true) {
                                    return <Branch key={name} treeData={treeData[name]} branchName={name} objectPath={`${objectPath}.${name}`} onSelect={onSelect} selectedFile={selectedFile} currentTime={currentTime} />;
                                } else {
                                    return <Leaf key={name} name={treeData[name]['name']} objectPath={`${objectPath}.${name}`} onSelect={onSelect} selectedFile={selectedFile} start={treeData[name]['start']} currentTime={currentTime} />;
                                }
                            } else {
                                return null;
                            }
                        }
                        )}
                    </ul>
                </li> : null}
            </Fragment>
        );
    }
}
