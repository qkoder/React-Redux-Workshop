import React, { Component } from 'react';
// import Profile from './profile';
// import MyState from './state';
import Events from './events';

class App extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <Events />
                        </div>
                    </div>
                </div>
            </>
        )


    }
}

export default App;
