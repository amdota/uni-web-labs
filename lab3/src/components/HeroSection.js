import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            {/*<video src="./videos/4.mp4" autoPlay loop muted/>*/}
            <h1>Hotel Vilena</h1>
            <p>Идеальное место для отпуска, каникул и уик-энда всей семьи</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Забронировать</Button>
            </div>
        </div>
    );
}

export default HeroSection