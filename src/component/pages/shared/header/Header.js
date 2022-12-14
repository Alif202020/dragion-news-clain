import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontex } from '../../../auth/authcontex/Authprobaider';

import Leftsidenave from '../leftsidenave/Leftsidenave';


const Header = () => {
  const {user,logout}=useContext(Authcontex)
  //console.log(user);


  const logoutclick= () =>{
    logout()
    .then(resualt=>{
      const user=resualt.user
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }


    return (
        <div>
             <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {
              user?.uid?
              <Nav.Link eventKey={2} href="#memes"><Button onClick={logoutclick}>Log out</Button></Nav.Link>
              :
              <>
              <Link to='/login' className='m-2'><Button>Login</Button></Link>
              <Link to='/sineup' className='m-2'><Button>Registration</Button></Link>
              <Link to='/profile' className='m-2'><Button>Profile</Button></Link>
              </>
            }
            <Nav.Link></Nav.Link>
            <Link to='/profile'>
              {
                user?.photoURL?
                <div className='d-flex'>
                <Nav.Link to='/pro'>{user?.displayName}</Nav.Link>
                <Image style={{height:'40px'}} roundedCircle src={user.photoURL}></Image>
                </div>
                :<FaUserAlt className='m-3 text-danger'></FaUserAlt>
              }
              </Link>

          </Nav>
          <div className='d-block d-lg-none'>
          <Leftsidenave></Leftsidenave>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;