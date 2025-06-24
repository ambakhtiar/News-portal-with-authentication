import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
            .then(respone => respone.json())
            .then(data => setLatestNews(data.data))
            .catch(error => console.log(error));
    }, [])


    return (
        <div className='flex item-center bg-gray-200 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            {/* <Marquee pauseOnHover={true} speed={80} className='space-x-5'> */}
            <Marquee pauseOnHover={true} speed={120} className='space-x-10'>
                {
                    latestNews.map(news => <Link to={`/news/${news._id}`} className='mr-10' key={news._id}> {news.title} </Link>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;