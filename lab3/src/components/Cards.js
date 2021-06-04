import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css'
import CardItem from "./CardItem";
function Cards(){
    return(
        <div className="cards">
            <h1>Our apartments</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='./images/n1.jpg' text="Люкс двухместный" label="number1" path='/apartments'/>
                        <CardItem src='./images/n2.jpg' text="Люкс двухместный" label="number2" path='/apartments'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='./images/n3.jpg' text="Люкс двухместный" label="number3" path='/apartments'/>
                        <CardItem src='./images/n4.jpg' text="Люкс двухместный" label="number4" path='/apartments'/>
                        <CardItem src='./images/n5.jpg' text="Люкс двухместный" label="number5" path='/apartments'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;