import React, { Component } from 'react';
import { fetchData } from './../../profile-data';

import Info from './info';
import Links from './links';
import Skills from './skills';

class Profile extends Component {

    constructor(props) {
        super(props)
        const profile = fetchData(props.id)
        this.state = {
            id: profile.id || '',
            name: profile.name ||  '',
            bio: profile.bio ||  '',
            skills: profile.skills ||  [],
            links: profile.links ||  []
        }


    }





    render() {

        const { name, bio, skills, links } = this.state
        return (
            <>
                <Info name={name} bio={bio} />
                <Skills skills={skills} />
                <Links links={links} />



            </>
        );
    }
}

;

export default Profile;