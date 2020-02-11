import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <>
                <strong>Skills</strong>
                <ul>
                    {this.props.skills.map((skill, key) => (
                        <li key={key}>{skill}</li>
                    ))}
                </ul>
            </>
        );
    }
}

;

export default Skills;