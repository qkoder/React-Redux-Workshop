import React, { Component } from 'react';
import Profile from './profile'

class App extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <Profile id={1} />
                            <Profile id={2} />
                            <Profile id={3} />
                        </div>
                    </div>
                </div>
            </>
        )


    }
}

export default App;
