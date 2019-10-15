import React from "react";
import ListButton from "./ListButton";
import GenerateButton from "./GenerateButton";

const ListSelector = (props) => {
    const buttons = props.buttons.map((button) => {
        return(
            <li key={button} className="nav-item">
                <ListButton onListSelect={props.onListSelect} listName={button} />
            </li>
        );
    });

    return(
        <div className="list-selector">
            <ul className="nav justify-content-around">
                {/* dropdown */}
                <div className="btn-group dropright">
                    <button type="button" className="list-name btn btn-outline-primary">Lists</button>
                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        {buttons}
                    </div>
                </div>
                {/* Randomise the selected list button */}
                <GenerateButton rerenderList={props.rerenderList}/>
            </ul>
        </div>
    );
};

export default ListSelector;