import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidenave = () => {
    const [catagoris,setcatagoris]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/news-category')
        .then(res=>res.json())
        .then(data=>setcatagoris(data))
    },[])
    return (
        <div>
            <h1>Catagoris</h1>
            <div>
                {
                    catagoris.map(catagory=><p key={catagory.id}>
                        <Link to={`/catagores/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftsidenave;