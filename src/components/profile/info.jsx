import React, { Component } from 'react';

class Info extends Component {
    render() {
        console.log(this.props);
        
        return (
            <>
                <h3>Name : {this.props.name}</h3>
                <p>Bio: {this.props.bio} </p>
            </>
        );
    }
}

;

export default Info;