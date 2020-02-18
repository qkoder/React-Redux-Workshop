import React, { Component } from 'react';

class EditText extends Component {

    state = {
        name: 'Saiful Islam',
        isEditable: false
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleDblClick = () => {
        this.setState({
            isEditable: true
        });
    }

    handleEnter = event => {
        if (event.key === 'Enter') {
            this.changeName(event.target.value)
        }
    }

    handleBlur = event => {
        this.changeName(event.target.value)
    }

    changeName = value => {
        if (value) {
            this.setState({
                isEditable: false
            });
        }
    }

    render() {
        return (
            <>
                <strong>Change Name</strong>
                {
                    this.state.isEditable ? (
                        <input
                            className="form-control"
                            placeholder="enter your name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            onKeyPress={this.handleEnter}
                            onBlur={this.handleBlur}

                        />
                    ) : (
                            <p onDoubleClick={this.handleDblClick}>
                                <strong>{this.state.name}</strong>
                            </p>
                        )
                }
            </>
        );
    }
}

export default EditText;