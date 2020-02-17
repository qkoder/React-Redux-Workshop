import React, { Component } from 'react';
import ShowData from './showData'
import Controller from './controller'

class MyState extends Component {

    state = {
        number: 0
    }

    increase = () => {
        this.setState(prev => ({ number: prev.number + 1 }));
    }

    decrease = () => {
        this.setState(prev => ({ number: prev.number - 1 }));
    }

 

    render() {


        return (
            <>
                <ShowData abc={this.state.number} />
                <Controller increase={this.increase} decrease={this.decrease} />

            </>
        )
    }
}

export default MyState;