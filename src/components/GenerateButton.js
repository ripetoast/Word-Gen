import React from "react";

class GenerateButton extends React.Component {
    handleClick = (event) => {
        // console.log(event.target.value);
        // this.setState({ term: event.target.value });
        this.props.rerenderList();
    }

    render(){
        return (
            <div className="generate-button">
                <button onClick={this.handleClick} type="button" className="btn btn-primary">
                    Randomise
                </button>
            </div>
        );
    }
    
}

export default GenerateButton;