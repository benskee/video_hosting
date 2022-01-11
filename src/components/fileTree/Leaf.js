import React, { Component, Fragment } from 'react';

export default class Leaf extends Component {
    render() {
        const { objectPath, selectedFile, name, start, currentTime } = this.props;
        return (
            <Fragment>
                {start <= currentTime ? <li onClick={() => this.props.onSelect(objectPath)}>
                    {selectedFile && selectedFile.objectPath === objectPath ?
                        <span className="selectedFile">
                            {name}
                        </span> :
                        <span>{name}</span>}
                </li> :
                    null}
            </Fragment>
        );
    }
}
