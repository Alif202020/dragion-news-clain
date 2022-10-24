import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Authcontex } from '../Authprobaider';

const Registration = () => {

    const {emailpassreg,updtprofil,varyfyemail}=useContext(Authcontex)
    const [error,seterror]=useState('')
    const [chakbox,setchakbox]=useState(false)


    const regestration=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photoURL=event.target.photo.value;
        const name=event.target.name.value;
        console.log(email,password,name);
        emailpassreg(email,password,name,photoURL)
        .then(resualt=>{
            const user=resualt.user
            console.log(user);
            seterror('')
            alert('Registration successfully')
              henderlprofil(name,photoURL)
              veryfyemailemail()
              toast.success('Veryfy Your E-mail address ')
          })
          .catch(error=>{
            console.error(error);
            seterror(error.message)
          })
    }

    const clickhendelchk=event=>{
      setchakbox(event.target.checked)
    }
    const henderlprofil=(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updtprofil(profile)
      .then(resualt=>{
        const user=resualt.user
        console.log(user);
      })
      .catch(error=>{
        console.error(error);
      })
    }

    const veryfyemailemail=()=>{
      varyfyemail()
      .then(()=>{})
      .catch(error=>console.error(error))
    }




    return (
        <div>
            <Form onSubmit={regestration}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="file">
        <Form.Label>Photo url</Form.Label>
        <Form.Control name='photo' type="photo" placeholder="Enter photp" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group  onClick={clickhendelchk} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='cheakbox' type="checkbox" label="Check me out" />
      </Form.Group>
      <p>{error}</p>
      <Button disabled={!chakbox} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Registration;