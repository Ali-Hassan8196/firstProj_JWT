import React, { useState } from 'react';
import './task1.css';
import { Button, Form } from 'react-bootstrap';

const Signup=()=>{
    const [dattta,setDattta]=useState({name:"",email:"",password:""});
    
    return(
        <div className="maindiv">
            <div>
            <Form>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={dattta.name} name='name' onChange={(e)=>setDattta({...dattta,name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={dattta.email} name='email' onChange={(e)=>setDattta({...dattta,email:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={dattta.password} name='password' onChange={(e)=>setDattta({...dattta,password:e.target.value})} />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        </div>
    )
}
export default Signup;