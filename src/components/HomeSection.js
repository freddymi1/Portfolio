import React from 'react';
import '../App.css';
import {Button} from "./Button";
import './HomeSection.css';
function HomeSection(){
    return(
        <div className="home-container">
            <video src="/videos/Coding.mp4" autoPlay loop muted></video>
            <div className='img-profil'>
                <img src="/images/profil/sary-za1.jpg" alt="Profil"/>
            </div>
            <h1 class="typeWriter" data-end="3000" data-text='["NARISOA HARILALA Freddy Michel !"]'></h1>
            <h4 class="typeWriter" data-end="3000" data-text='["Developpeur junior"]'></h4>
            <div className="home-btns">
                <Button
                    className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>TELECHARGER MON CV &nbsp;<i className='fa fa-download'></i>
                </Button>

            </div>
        </div>
    )
}
export default HomeSection;
