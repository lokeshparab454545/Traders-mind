import React from 'react'
import './News.css'
const NewsCard = ({ news }) => {
    return (
        <div className='news-card' >
            <div className="news-img">
                <img src={(news.image_url === null) ? "https://wallpapercave.com/wp/wp9641514.jpg" : news?.image_url} alt="news_img" />
            </div>
            <div className="news-content">
                <a target="_blank" href={news?.link}>{news?.title}</a>
            </div>
        </div>
    )
}

export default NewsCard
