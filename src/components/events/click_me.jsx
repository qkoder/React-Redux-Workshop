import React, { Component } from 'react';

class ClickMe extends Component {

    handleClick = event => {
        console.log(event.target);

    }

    handleClick2 = (event, target) => {
        console.log(target);

    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="btn btn-success">Click Me</button>

                {/* onClick={() => this.handleClick2()} */} 

                <button onClick={event => this.handleClick2(event, event.target)} className="btn btn-success">Click Me</button>
            </div>
        );
    }
}

export default ClickMe;


/*


function handleClick(event){

}

*/
