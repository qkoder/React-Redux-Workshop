import React, { Component } from 'react';

class ShowData extends Component {
    render() {
        return (
            <>
                <h1>Current Number : {this.props.abc}</h1>
            </>
        );
    }
}

export default ShowData;