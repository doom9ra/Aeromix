import React from 'react';
// carousel elements
import Item from "@data/items.js";

// styles
import './newsEl.scss';

export default function NewsEl(props) {

    const { tag, title, text, img } = props.newsEl;
    let listItems = text

    if (typeof(text) != 'string') {
        listItems = text.map((item) =>
            <p>{item}</p>
        );
    }


    return (
        <>

            <Item className="n-car-el">
                <div className="n-tag">{tag}</div>
                <div className="n-car-el-content">
                    <h1>{title}</h1>
                    <p>{listItems}</p>
                </div>
                <img className="n-logo" src={img} alt=""/>
            </Item>
                                    
        </>
    );
}