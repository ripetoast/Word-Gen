import React from "react";
import ListSelector from "./ListSelector";
import List from "./List";
import "../style/style.css";

class App extends React.Component{
    state = {
        fullData: {},
        selectedList: null,
        list: [],
        buttons: []
    };

    componentDidMount(){
        fetch("data/data.json")
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                buttons: Object.keys(data),
                fullData: data
            })
        })
        .catch((err) => console.log(err));
    }
    
    onListSelect = (listName) => {
        this.setState({
            list: this.state.fullData[listName],
            selectedList: listName
        });
    }

    render(){
        return(
            <div className="container bg bg-light">
                <h1 className="display-1 text-center">Word Gen</h1>
                <br/>
                <ListSelector onListSelect={this.onListSelect} buttons={this.state.buttons} />
                <br />
                {this.state.selectedList === null ? "" : <List listData={this.state.list} />}
            </div>
        );
    }
}

export default App;