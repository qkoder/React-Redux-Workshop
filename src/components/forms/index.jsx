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

    validate = () => {
        const errors = {}

        const { values: { name, email, pass } } = this.state

        if (!name) {
            errors.name = 'Please provide your name'
        }

        if (!email) {
            errors.email = 'Please provide your email'
        }

        if (!pass) {
            errors.pass = 'Please provide your pass'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
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
        const { errors, isValid } = this.validate();
        if (!isValid) {
            this.setState({
                errors: { ...this.state.errors, ...errors }
            })
        } else {
            event.target.reset();
        }

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

    focusHandaler = event => {
        this.setState({
            errors: {
                ...this.state.errors,
                [event.target.name]: ''
            }
        });
    }

    blurHandaler = event => {
        const { errors, isValid } = this.validate();
        if (!isValid) {
            this.setState({
                errors: { ...this.state.errors, ...errors }
            })
        }
    }


    render() {
        // console.log(this.state);

        return (
            <>
                <Form
                    values={this.state.values}
                    errors={this.state.errors}
                    changeHandaler={this.changeHandaler}
                    submitHandaler={this.submitHandaler}
                    resetHandaler={this.resetHandaler}
                    focusHandaler={this.focusHandaler}
                    blurHandaler={this.blurHandaler}
                />
            </>
        );
    }
}

export default Forms;