import React, { Component } from 'react';
// import Profile from './profile';
// import MyState from './state';
// import Events from './events';
// import Forms from './forms';
import FormikForm from './formik';

class App extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <FormikForm />
                        </div>
                    </div>
                </div>
            </>
        )


    }
}

export default App;
