import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="col">
                        <h1>Traders Mind</h1>
                        <p>
                            Our websites provide a user-friendly interface where users can access real-time market data, research tools, and analysis to make informed investment decisions.
                        </p>
                    </div>
                    <div className="col" id='footer-service'>
                        <h3>About</h3>
                        <a href='#home'>Home</a>
                        <a href='#fund'>Fundamentals</a>
                        <a href='#tech'>Technicals</a>
                        <a href='#news'>News</a>
                    </div>
                    <div className="col">
                        <h2>Connect with Us</h2>
                        <p>Let's learn and grow together</p>
                        <div className="row">
                            <a target='_blank' href="https://www.instagram.com/_traders.mind_/"><i className="ri-instagram-fill"></i></a>
                            <a href="https://www.instagram.com/_traders.mind_/"><p>_traders.mind_</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
