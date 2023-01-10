import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import './task1.css';

const Login=()=>{
    const [datta,setDatta]=useState({email:"",password:""});
    
    return(
        <div className="maindiv">
          <div>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={datta.email} name='email' onChange={(e)=>setDatta({...datta,email:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={datta.password} name='password' onChange={(e)=>setDatta({...datta,password:e.target.value})} />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
        </div>
    )
}
export default Login;