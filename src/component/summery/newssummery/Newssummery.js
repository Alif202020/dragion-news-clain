import React from 'react';
import { Button, Card, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt,FaBookmark, FaStar, FaEye } from 'react-icons/fa';

const Newssummery = (props) => {
    const {_id,title,thumbnail_url,details,author,rating,total_view}=props.news
    //console.log(props.news);
    return (
        <div>
            <Card className='my-4'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <div className=''> 
                            <Image
                                    roundedCircle
                                     src={author.img}
                                     style={{height:60}}
                           ></Image>
                        </div>
                        <div className='mx-3'>
                                    <p className='mb-0'>{author.name}</p>
                                    <p>{author.published_date}</p>
                        </div>               
                     </div>
                     <div>
                        <FaShareAlt></FaShareAlt>
                        <FaBookmark></FaBookmark>
                     </div>

                                
                    
                </Card.Header>
            <Card.Title className='my-3'>{title}</Card.Title>
      <Card.Img variant="top" src={thumbnail_url} />
      <Card.Body>
        
        <>{
        details.length > 200 ?
        <p>{details.slice(0,200)+'...'}<Link to={`/news/${_id}`}>reed more</Link></p>
        :
        <p>{details}</p>
        } </>
        <Link to={`/news/${_id}`}>
        <Button variant="primary">Go News Details</Button>
        </Link>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center'>
        <div>
            <FaStar className='text-warning'></FaStar>
            <span className='ms-3'>{rating.number}</span>
        </div>
        <div>
            <FaEye></FaEye>
            <span className='ms-3'>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default Newssummery;