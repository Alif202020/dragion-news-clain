import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button,  Carousel,  ListGroup,  ListGroupItem,  Stack } from 'react-bootstrap';
import {FaGoogle,FaGithub,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaYoutubeSquare,FaWhatsappSquare} from 'react-icons/fa'
import  bat  from '../../../../sssass/Brand/bat.png';
import  alif  from '../../../../sssass/Brand/my-alif-bg.jpg';
import { Authcontex } from '../../../auth/authcontex/Authprobaider';





const Rightsidenave = () => {


const {googlesignin}=useContext(Authcontex)
const gooogleprovaider=new GoogleAuthProvider()

const googleclick=()=>{
  googlesignin(gooogleprovaider)
  .then((result) => {
    const user = result.user;
    console.log(user);

  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage,error);
    
    // ...
  });
}

    return (
        <div>
          
          <Stack>
      <Button onClick={googleclick} className='mb-3 w-400' variant="outline-primary"><FaGoogle></FaGoogle> Google signin</Button>
      <Button className='mt-3' variant="outline-success"><FaGithub></FaGithub> Github signin</Button>
      </Stack>
    <br />
    <br />
    <br />
    <ListGroup>
        <ListGroupItem className='m-2'> <FaFacebookSquare></FaFacebookSquare> Facebook</ListGroupItem>
        <ListGroupItem className='m-2'><FaTwitterSquare></FaTwitterSquare> Twitter</ListGroupItem>
        <ListGroupItem className='m-2'><FaInstagramSquare></FaInstagramSquare> Instagran</ListGroupItem>
        <ListGroupItem className='m-2'><FaYoutubeSquare></FaYoutubeSquare> YouTub</ListGroupItem>
        <ListGroupItem className='m-2'><FaWhatsappSquare></FaWhatsappSquare> Whatsapp</ListGroupItem>
          
    </ListGroup>

    <div>



    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alif}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bat}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alif}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>
        </div>
    );
};

export default Rightsidenave;