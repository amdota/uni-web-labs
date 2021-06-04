import React from 'react';
import {Link} from 'react-router-dom';
import './Features.css'
import FeaturesItem from "./FeaturesItem";
import CardItem from "./CardItem";
function Features(){
    return(
        <div className="cards">
            <h1>Наши преимущества</h1>
            <div className="features__container">
                <div className="features__wrapper">
                    <ul className="features__items">
                        <FeaturesItem src='./images/icon1.png' text="Бронирование" info="скидки при раннем бронировании" />
                        <FeaturesItem src='./images/icon2.png' text="Удобства" info="номера оснащенны всем необходимым для получения максимального комфорта" />
                        <FeaturesItem src='./images/icon3.png' text="Атмосфера" info="тихое и спокойное место" />
                    </ul>
                    <ul className="features__items">
                        <FeaturesItem src='./images/icon4.png' text="Пейзажи" info="таких закатов как здесь, Вы еще нигде не встречали" />
                        <FeaturesItem src='./images/icon5.png' text="Расположение" info="море в 1 минуте ходьбы" />
                        <FeaturesItem src='./images/icon6.png' text="Парковка" info="для гостей пансионата есть охраняемая парковка" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Features;