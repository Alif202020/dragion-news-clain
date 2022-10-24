import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const News = () => {
    const news=useLoaderData()
    //console.log(news);
    const {author,image_url,title,total_view,details,category_id}=news
    return (
        <div>
            <h1>{news.title}</h1>
            
            <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='d-flex justify-content-between my-5'>
          <h5>{author.name}</h5>
          <p>{author.published_date}</p>
          <p>
            
            {total_view}
            <FaEye className='ms-3'></FaEye>
            </p>
        </div>
        <Card.Text>{details}</Card.Text>
        <Link to={`/catagores/${category_id}`}>
        <Button>Go Back Catagores</Button>
        </Link>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default News;