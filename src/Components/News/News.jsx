import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import './News.css'

const News = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://newsapi.org/v2/everything?q=nse&from=publishedAt&sortBy=publishedAt&apiKey=50e72b6da1e54ffcb1a5217b95b26cd1");
            const newsData = await response.json();
            setData(newsData?.articles);
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
                    data.slice(21, 30).map((news, i) => (
                        <NewsCard key={i} news={news} />
                    ))
                }
            </div>
        </section>
    )
}

export default News
