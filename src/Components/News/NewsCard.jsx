import React from 'react'

const NewsCard = ({ news }) => {
    return (
        <div className='news-card' >
            <div className="news-img">
                <img src={news.urlToImage} alt="news_img" />
            </div>
            <div className="news-content">
                <a target="_blank" href={news.url}>{news.title}</a>
            </div>
        </div>
    )
}

export default NewsCard
