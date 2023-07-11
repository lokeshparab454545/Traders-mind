import React from 'react'
import './Technical.css'
const Technical = () => {
    const openLect1 = () => {
        const url = "https://drive.google.com/file/d/1WvK3zy-m-xKNZHMSvf91-pn8oKrdlOFS/view?usp=sharing";
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    const openLect2 = () => {
        const url = "https://drive.google.com/file/d/1SmxSM7ufFlpOUZai0PiNJoeVUq1VuhOc/view?usp=sharing";
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    const openLect3 = () => {
        const url = "https://drive.google.com/file/d/1d0iPwTrbZ8GxmI97yukIAYRyVGSHmZz7/view?usp=sharing";
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    return (
        <section className='technicals' id='tech'>
            <div className="container">
                <h1>Technical Analysis</h1>
                <p>Learn all of the basic Technical concepts</p>
                <div className="technical-wrapper">
                    <div onClick={() => openLect1()} className="lect">
                        <img src="/assets/lect-1.png" alt="" />
                        <p>Basic of Stock Market</p>
                    </div>
                    <div onClick={() => openLect3()} className="lect">
                        <img src="/assets/lect-3.png" alt="" />
                        <p>Patterns and BreakOuts</p>
                    </div>
                    <div onClick={() => openLect2()} className="lect">
                        <img src="/assets/lect-2.png" alt="" />
                        <p>Different types of Candle</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technical
