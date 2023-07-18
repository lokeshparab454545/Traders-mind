import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import './News.css'

const News = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_2578877b68ff116f64b0404102cdb2b1a5cab&q=stocks&country=in&language=en&category=business");
            const newsData = await response.json();
            setData(newsData?.results);
            console.log(newsData?.results);
        }
        getData();
    }, []);

    if (!data || !data.length) {
        return;
    }
    return (
        <section className='news' id='news'>
            <h1>Stock News</h1>
            <p>Get all the latest stock market news and updates</p>
            <div className='container news-wrapper'>
                {
                    data.slice(0, 9).map((news, i) => (
                        <NewsCard key={i} news={news} />
                    ))
                }
            </div>
        </section>
    )
}

export default News
