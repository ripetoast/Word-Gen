import React from "react";

class List extends React.Component{
    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    render(){
        const renderedList = this.shuffle(this.props.listData).map((keyword) => {
            return <li key={keyword} className="keyword-item list-group-item text-center"><h1 className="display-4">{keyword}</h1></li>;
        });

        return(
            <ul className="list-group">
                {renderedList}
            </ul>
        )
    }
}

export default List;