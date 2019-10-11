import React from "react";

class ListButton extends React.Component{
    state = {term: ""};

    handleClick = (event) => {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
        this.props.onListSelect(event.target.value);
    };

    render(){
        return (
            <div>
                <button onClick={this.handleClick} value={this.props.listName} href="" className="btn btn-outline-primary">
                    {this.props.listName}
                </button>      
            </div>
        )
    }   
}

export default ListButton;