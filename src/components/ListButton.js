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
            <div className="list-button">
                {/* <a className="dropdown-item" href="#"> */}
                <button onClick={this.handleClick} value={this.props.listName} href="" className="btn btn-outline-primary dropdown-item">
                        {this.props.listName}
                </button>     
                {/* </a>  */}
            </div>
        )
    }   
}

export default ListButton;