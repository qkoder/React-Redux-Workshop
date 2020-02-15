import React, { Component } from 'react';

class MyState extends Component {

    state = {
        number: 0
    }

    increase = () =>{
        this.setState(abc => ({ number: abc.number + 1}));
    }

    decrease = () =>{
        this.setState(abc =>({number : abc.number -1}));
    }



    render() {

        // setTimeout(() => {
        //     this.setState({number: this.state.number + 1})
        // }, 1000)


        return (
            <>
                <h1>Current Number : {this.state.number}</h1>

                <button onClick={this.increase}>
                    Add
                </button>

                <button onClick={this.decrease}>
                    Sub
                </button>

                {/* <button className="btn btn-success"

                    onClick={() =>
                        this.setState({ number: this.state.number + 1 })}
                >

                    Add
                    </button> */}
            </>
        )
    }
}

export default MyState;