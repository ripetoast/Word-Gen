import React from "react";
import ListButton from "./ListButton";

const ListSelector = (props) => {


    return(
        <div>
            <ul className="nav nav-pills justify-content-around">
                <li className="nav-item">
                    <ListButton onListSelect={props.onListSelect} listName="Hiragana" />
                </li>
                <li className="nav-item">
                    <ListButton onListSelect={props.onListSelect} listName="Romanjii" />
                </li>
            </ul>
        </div>
    );
};

export default ListSelector;