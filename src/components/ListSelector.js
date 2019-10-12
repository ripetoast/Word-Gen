import React from "react";
import ListButton from "./ListButton";

const ListSelector = (props) => {
    const buttons = props.buttons.map((button) => {
        return(
            <li key={button} className="nav-item">
                <ListButton onListSelect={props.onListSelect} listName={button} />
            </li>
        );
    });

    return(
        <div>
            <ul className="nav nav-pills justify-content-around">
                {buttons}
            </ul>
        </div>
    );
};

export default ListSelector;