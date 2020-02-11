import React, { Component } from 'react';

import Info from './info';
import Links from './links';
import Skills from './skills';

class Profile extends Component {
    render() {
        return (
            <>
                <Info />
                <Skills />
                <Links />

            </>
        );
    }
}

;

export default Profile;