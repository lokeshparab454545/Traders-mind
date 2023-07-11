import React from 'react'

const Indexes = ({ index, dayChange }) => {
    return (
        <div className='scroll'>
            <div className="scroll-content">
                <p>{index.NSECode}</p>
                <p>{index.ltp}</p>
                <div className="price-change">
                    <span style={{ color: (dayChange[0] == '-') ? "red" : "#00c023" }} >{index.dayChange}</span>
                    <span style={{ color: (dayChange[0] == '-') ? "red" : "#00c023" }} >({index.dayChangePerc}%)</span>
                </div>
            </div>
            <div className='scroll-icon'>
                {(dayChange[0] == '-') ? <i style={{ color: "red" }} className="ri-arrow-down-s-fill"></i> : <i style={{ color: "#00c023" }} className="ri-arrow-up-s-fill"></i>}
            </div>
        </div>
    )
}

export default Indexes
