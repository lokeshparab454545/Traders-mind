import React from 'react'
import './Hero.css'
import Button from '../Utils/Button'
const Hero = () => {
    return (
        <section className="hero">
            <div className='container hero-wrapper'>
                <div className="hero-text">
                    <div className="hero-title">
                        <h1>Learn <span style={{ color: "#3783f6" }}> Trading</span></h1>
                        <h1>And Start <span style={{ color: "#3783f6" }}> Investing</span></h1>
                    </div>
                    <p>Fuel your portfolio, ignite your financial success.</p>
                    <button className='hero-btn'><a href="#tech">Learn Now</a></button>
                </div>
                <img src="/assets/hero.png" alt="" />
            </div>
        </section>
    )
}

export default Hero
