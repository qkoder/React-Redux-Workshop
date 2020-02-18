import React, { Component } from 'react';

class TwoWayData extends Component {

    state = {
        name: 'Saiful',
        count: 0
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })

    }


    render() {
        console.log(this.state.name);

        return (
            <>
                <h1>Two Way Data</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Change your Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <br />

                <button
                    className="btn btn-success"
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Click {this.state.count} Times

                </button>
            </>
        );
    }
}

export default TwoWayData;