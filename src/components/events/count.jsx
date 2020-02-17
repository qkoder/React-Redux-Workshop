import React, { Component } from 'react';

class Count extends Component {

    state = {
        count: 0,
    }

    render() {

        const { count } = this.state

        return (
            <>
                <button
                    className="btn btn-success"
                    onClick={() =>{
                        this.setState(prevState =>{
                            if(prevState.count === 10){
                                return {
                                    count : 0
                                }
                            }else{
                                return{
                                    count: prevState.count +1
                                }
                            }
                        })
                    }}
                >
                    Click Me
                    </button>

                <br />

                {/* {this.state.count > 0 ? <p>Test</p> : null} turnery operator single statement */}

                {count > 0 ? (<p>Count Value : {count}</p>) : (<p>Please Start Count</p>)}
            </>
        );
    }
}

export default Count;