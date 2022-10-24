import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Authcontex } from '../authcontex/Authprobaider';

const Profile = () => {
    const {user}=useContext(Authcontex)
    const [name,setname]=useState(user.displayName)
    const photo=useRef(user?.photoURL)

    const hendellnamechange=(event)=>{
        //event.preventDefault()
        setname(event.target.value)

    }
    const hendellchange=(event)=>{
        //event.preventDefault()
        setname(event.target.value)
    }
    const hendellsubmite=(event)=>{
        event.preventDefault()
        console.log(name,photo.current.value);
        
    }
    return (
        <Form onSubmit={hendellsubmite}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
        </Form.Group>


        <Form.Group onChange={hendellnamechange} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Yiur name</Form.Label>
          <Form.Control defaultValue={name} type="text" placeholder="Enter email" />
        </Form.Group>
  


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Yiur name</Form.Label>
          <Form.Control ref={photo} defaultValue={photo} type="text" placeholder="Enter email" />
        </Form.Group>
  


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;