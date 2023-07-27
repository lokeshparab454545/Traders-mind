import React, { useState } from 'react'
import Button from '../Utils/Button'
import './Navbar.css'
const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const toggle = () => {
        setNavToggle(!navToggle);
    }
    return (
        <nav className='navbar'>
            <div className="container nav-wrapper">
                <div className="nav-logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <div className={(navToggle) ? "nav-links-active" : "nav-links"}>
                    <ul>
                        <li onClick={() => toggle()}><a href="#">Home</a></li>
                        <li onClick={() => toggle()}><a href="#fund">Technicals</a></li>
                        <li onClick={() => toggle()}><a href="#tech">Learn</a></li>
                        <li onClick={() => toggle()}><a href="#news">News</a></li>
                    </ul>
                </div>
                <div className="nav-btns">
                    <Button name={"Login"} bgColour={"#f5fdff"} outlineColour={"#01084c"} textColour={"#01084c"} outline={true} width={"90px"} />
                    <Button name={"Sign Up"} bgColour={"#01084c"} textColour={"#f5fdff"} outline={false} width={"90px"} />
                    <span onClick={() => toggle()} className='mobile_menu'> <i className="ri-menu-line"></i></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
