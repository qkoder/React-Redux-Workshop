import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

class FormikForm extends Component {
    render() {
        return (
            <>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: ''
                    }}

                    onSubmit={
                        (values, formikBag) => {
                            console.log(values);
                            console.log(formikBag);

                        }
                    }
                >

                    {props => {
                        // console.log(props);

                        return (
                            <Form>
                                <Field
                                    name='name'
                                    placeholder='Enter Name'
                                    className="form-control"
                                />
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='Enter Email'
                                    className="form-control"
                                />
                                <Field
                                    type="password"
                                    name='password'
                                    placeholder='Enter Password'
                                    className="form-control"
                                />

                                <button type="submit">Submit</button>
                            </Form>
                        );
                    }}

                </Formik>
            </>
        );
    }
}

export default FormikForm;