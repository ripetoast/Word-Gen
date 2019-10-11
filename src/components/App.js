import React from "react";
import ListSelector from "./ListSelector";
import List from "./List";

class App extends React.Component{
    state = {
        selectedList: null,
        list: []
    };
    
    onListSelect = (listName) => {
        fetch("data/data.json")
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({ 
                list: data[listName],
                selectedList: listName
            })
        })
        .catch((err) => console.log(err));
    }

    render(){
        return(
            <div className="container">
                <h1 className="display-1 text-center">Word Gen</h1>
                <br/>
                <ListSelector onListSelect={this.onListSelect}/>
                <br />
                {this.state.selectedList === null ? "" : <List listData={this.state.list} />}
            </div>
        );
    }
}

export default App;