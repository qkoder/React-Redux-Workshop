import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <>
                <strong>Social Links</strong>

                <ul>
                    {this.props.links.map((link, key) => (
                        <li key={key}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    
                </ul>
            </>
        );
    }
}

;

export default Links;