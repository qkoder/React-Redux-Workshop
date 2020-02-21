import React, { Component } from 'react';
import Form from './form'

class Forms extends Component {

    state = {
        values: {
            name: '',
            email: '',
            pass: '',
        },

        errors: {
            name: '',
            email: '',
            pass: '',
        },

        touched: {
            name: false,
            email: false,
            pass: false
        }


    }


    changeHandaler = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    submitHandaler = event => {
        event.preventDefault();
        console.log(this.state.values);
        event.target.reset();

    }

    resetHandaler = event => {
        this.setState({
            values: {
                name: '',
                email: '',
                pass: '',
            }
        })

    }


    render() {
        // console.log(this.state);

        return (
            <>
                <Form
                    values={this.state.values}
                    changeHandaler={this.changeHandaler}
                    submitHandaler={this.submitHandaler}
                    resetHandaler={this.resetHandaler}
                />
            </>
        );
    }
}

export default Forms;