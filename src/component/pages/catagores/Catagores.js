import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newssummery from '../../summery/newssummery/Newssummery';

const Catagores = () => {
    const news=useLoaderData()
    return (
        <div>
            <h1> Catagoris  {
                news.length}</h1>
                {
                    news.map(news=><Newssummery
                    key={news._id}
                    news={news}
                    ></Newssummery>)
                }
        </div>
    );
};

export default Catagores;