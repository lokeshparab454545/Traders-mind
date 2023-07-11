import React, { useEffect, useState } from 'react'
import './HorizontalScroll.css'
import Indexes from './Indexes';
const HorizontalScroll = () => {
    const [allIndexes, setAllIndexes] = useState([]);
    useEffect(() => {
        const getAllStockData = async () => {
            const stockResponse = await fetch("https://api.stockmarketapi.in/api/v1/indexprice?token=1ccb89ebca01f6564748fab7868488b0d96409bf894217686ba124d7356686c9&indexcode=BANKNIFTY,NIFTY,FINNIFTY,NIFTY100,NIFTYMIDCAP,NIFTYAUTO,NIFTYFMCG,NIFTYIT,NIFTYMEDIA,NIFTYMETAL,NIFTYPHARMA,NIFTYPSUBANK,NIFTYPVTBANK,NIFTYREALTY");
            const stockData = await stockResponse.json();
            setAllIndexes(stockData?.data);
        }
        getAllStockData();
    }, []);
    return (
        <div className="slider">
            <div className='slider-track'>
                {
                    allIndexes.map((indexes, i) => (
                        <Indexes key={i} index={indexes} dayChange={indexes.dayChangePerc} />
                    ))
                }
            </div>
        </div>
    )
}

export default HorizontalScroll
