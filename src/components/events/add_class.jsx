import React, { Component } from 'react';

class AddClass extends Component {

    state = {
        active: false,
        isBoxVisible: false
    }



    handleClick = () => {
        this.setState(abc => ({
            active: !abc.active
        }))
    }


    toggleBox = () =>{
        this.setState(prevState =>({
            isBoxVisible : !prevState.isBoxVisible
        }));
    }

    render() {
        const {isBoxVisible} = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Button</button>
                <p className={this.state.active ? 'text-primary active' : 'text-danger'}>This is text</p>

                <br/>

                <button onClick={this.toggleBox}> Show Box</button>

                <h4 className={`text-${isBoxVisible ? "primary" : 'danger'}`}> This is Box title</h4>

                <button className={`btn btn-${isBoxVisible ? "danger" : 'primary'}`}> This is Box title</button>

            </div>
        );
    }
}

export default AddClass;