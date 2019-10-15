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

    rerenderList = () => {
        this.setState((prevState) => ({
            selectedList: prevState.selectedList
        }));
    }

    render(){
        return(
            <div className="container bg bg-light">
                <div className="d-flex justify-content-center">
                    <img src="./ListGen.svg" alt="logo" style={{ "width": "30rem" }} />
                </div>
                <br/>
                <ListSelector rerenderList={this.rerenderList} onListSelect={this.onListSelect} buttons={this.state.buttons} />
                <br />
                {this.state.selectedList === null ? "" : <List listData={this.state.list} />}
            </div>
        );
    }
}

export default App;