import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as yup from 'yup';
// import Forms from './form'

const myValidationSchema = yup.object().shape({
    name:
        yup.string()
            .required('Required')
            .min(3, 'Too Short!')
            .max(10, 'Too Long'),
    email:
        yup.string()
            .required('Required')
            .email('Invalid Email'),
    password:
        yup.string()
            .required('Required')
            .min(4, 'min 4 chars')

});

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
                            formikBag.resetForm();
                        }
                    }

                    validationSchema={myValidationSchema}
                    // validateOnBlur={true}
                    // validateOnChange={false}
                >

                    {props => {
                        // console.log('Errors: ', props.errors);

                        return (
                            <Form>
                                <ErrorMessage name="name"/>
                                <Field
                                    name='name'
                                    placeholder='Enter Name'
                                    className="form-control"
                                />
                                <ErrorMessage name="email" />
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='Enter Email'
                                    className="form-control"
                                />
                                <ErrorMessage name="password" />
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