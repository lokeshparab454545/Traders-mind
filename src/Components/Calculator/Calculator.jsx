import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [amt, setAmt] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [amountInv, setAmountInv] = useState("");
    const [estimateRet, setEstimateRet] = useState("");
    const [finalAmt, setFinalAmt] = useState("");

    const calculateSIP = () => {
        var monthlyRate = rate / 12 / 100;
        var months = time * 12;
        var futureVal = 0;
        futureVal = amt * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
        var amountInvested = amt * months;
        var estimate = futureVal - amountInvested;
        setAmountInv(amountInvested + " Rs.");
        setEstimateRet(Math.round(estimate > 0 ? estimate : 0) + " Rs.")
        setFinalAmt(Math.round(futureVal > 0 ? futureVal : 0) + " Rs.")
        return futureVal;
    }


    return (
        <section className='calci'>
            <div className="container">
                <h1>SIP Calculator</h1>
                <p>Calculate returns on your SIP investments</p>
                <div className="cali-wrapper">
                    <div className="calci-img">
                        <img src="https://img.freepik.com/free-vector/clipboard-with-official-doc-managing-extra-money-board-with-paper-finance-planer-yellow-coin-stack-money-pile-bonus-fund-benefits-prosperity-vector-isolated-concept-metaphor-illustration_335657-2153.jpg?w=740&t=st=1688402326~exp=1688402926~hmac=ab58646a840a8e95263e210af5c5b896ff44827cdb4b49634439476a6de348b4" alt="" />
                    </div>
                    <div className="calci-input">
                        <div className="input">
                            <h3>Monthly Investment Amount <span>(Rs.)</span></h3>
                            <input type="number" placeholder='20000' onChange={(e) => { setAmt(e.target.value) }} />
                        </div>
                        <div className="input">
                            <h3>Investment Period <span>(Yrs.)</span></h3>
                            <input type="number" placeholder='10' onChange={(e) => { setTime(e.target.value) }} />
                        </div>
                        <div className="input">
                            <h3>Expected Annual Returns <span>(%)</span></h3>
                            <input type="number" placeholder='15' onChange={(e) => { setRate(e.target.value) }} />
                        </div>
                        <button className='calci-btn' onClick={() => calculateSIP()}>Calculate</button>
                    </div>
                </div>
                <div className="calci-op">
                    <div style={{ backgroundColor: "#4447ea" }} className="calci-ele">
                        <img src="/assets/ammountInv.png" alt="" />
                        <strong >Amount Invested: <h3>{amountInv}</h3></strong>
                    </div>
                    <div style={{ backgroundColor: "#ff9000" }} className="calci-ele">
                        <img src="/assets/estimatedRet.png" alt="" />
                        <strong>Estimate Returns: <h3>{estimateRet}</h3> </strong>
                    </div>
                    <div style={{ backgroundColor: "#008000" }} className="calci-ele">
                        <img src="/assets/finalAmt.png" alt="" />
                        <strong>Final Amount: <h3>{finalAmt}</h3></strong>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator

