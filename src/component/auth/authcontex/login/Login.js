import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcontex } from '../Authprobaider';

const Login = () => {


    const {emailpasslogin}=useContext(Authcontex)
    const naveget=useNavigate()
    const [error,seterror]=useState('')


    const loginform =event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value;
        const password=form.password.value;
        //console.log(email,password);
        emailpasslogin(email,password)
        .then(resualt=>{
            const user=resualt.user
            console.log(user);
            form.reset()
            seterror('')
            if(user?.emailVerified){
              naveget('/')
            }
            else{
              toast.error('Your email mast be Verify')
            }
            //alert('Login successfully')
            
          })
          .catch(error=>{
            console.error(error);
            seterror(error.message)
          })
          // .finally(()=>{

          // })
    }
    return (
        <Form onSubmit={loginform}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="primary" type="submit">
        LOG IN
      </Button>
    </Form>
    );
};

export default Login;