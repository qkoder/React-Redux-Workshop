import React, { Component } from 'react';

class Controller extends Component {
    render() {
        return (
            <>

                <button onClick={this.props.increase}>Add</button>

                <button onClick={this.props.decrease}>Sub</button>

            </>
        );
    }
}

export default Controller;