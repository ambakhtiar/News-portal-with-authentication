import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news)

    return (
        <div>
            <h2 className="font-semibold">Dragon News</h2>
            <h2 className="text-gray-400">News Found {news.length}</h2>
            <div>
                {
                    news.map(singleNews => <NewsCard
                        key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;