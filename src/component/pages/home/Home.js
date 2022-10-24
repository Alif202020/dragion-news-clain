import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newssummery from '../../summery/newssummery/Newssummery';

const Home = () => {
    const news=useLoaderData()
    //console.log(news[0]);
    return (
        <div>
            <h1>Home{news.length}</h1>
            {
                news.map(news=><Newssummery
                key={news._id}
                    news={news}
                ></Newssummery>)
            }
        </div>
    );
};

export default Home;