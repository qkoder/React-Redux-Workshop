import React, { Component } from 'react';

import Info from './info';
import Links from './links';
import Skills from './skills';

class Profile extends Component {
    name = 'Saiful Islam';
    bio = 'I am JavaScript Developer';
    skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Nextjs'];
    links = [
        { link: 'https://youtube.com', name: 'Youtube' },
        { link: 'https://fb.com', name: 'Facebook' },
        { link: 'https://twitter.com', name: 'Twitter' },
        { link: 'https://linkedin.com', name: 'Linkedin' },
        { link: 'https://github.com', name: 'Github' },
    ]
    render() {
        return (
            <>
                <Info name={this.name} bio={this.bio} />
                <Skills skills={this.skills} />
                <Links links={this.links} />

            </>
        );
    }
}

;

export default Profile;