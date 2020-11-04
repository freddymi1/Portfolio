import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className = "navbar" >
                <div className = "navbar-container" >
                    <Link to = "/" className = "navbar-logo" onClick = { closeMobileMenu } >
                        <img src="/images/logo/logo.png" alt="logo"/>
                    </Link>
                    <div className = "menu-icon" onClick = { handleClick } >
                        <i className = { click ? 'fa fa-times' : 'fa fa-bars' }/>
                    </div>
                    <ul className = { click ? 'nav-menu active' : 'nav-menu' }>
                        <li className = 'nav-item'>
                            <Link to = '/' className = 'nav-links' onClick = { closeMobileMenu }>
                                Accueil
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Experiences' className = 'nav-links' onClick = { closeMobileMenu }>
                                Experiences
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/portfolio' className = 'nav-links' onClick = { closeMobileMenu }>
                                Portfolio
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/service' className = 'nav-links' onClick = { closeMobileMenu }>
                                Services
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/signup' className = 'nav-links-mobile' onClick = { closeMobileMenu }>
                                Contact
                            </Link >
                        </li>
                    </ul>
                    {button && < Button buttonStyle = 'btn--outline' > Contact</Button>}
                </div >
            </nav> </>
        )
    }

    export default Navbar
