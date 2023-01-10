import React, { useState, useEffect } from 'react';
import './task1.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Home from './Home';


function Api(){
    const [data,setData]=useState({email:"owner@rentblaze.com", password:"123456789"}); 
    const {arritems,setArritems}=useState()
   

    const handleSubmit= async(e)=>{
      e.preventDefault()
      await axios.post(`https://apis.rentblaze.com/public/api/auth/login_grant`, data)
      .then((response)=>{
        console.log(response.data); 
        const getToken=localStorage.getItem("access_token")
        // const a ="yuruifghdfhj";
        localStorage.setItem("access_token",JSON.stringify(response?.data.access_token));
        if(getToken){
        window.location.href="/Home";
        }
      })
    .catch((error)=>{
        console.log("Error occured",error);
    })

    // const get_token = JSON.parse(localStorage.getItem("access_token"));
      

    }
   
    // const handleUser= async(e)=>{
    //   const get_token = JSON.parse(localStorage.getItem("access_token"));
    //   await axios.get(`https://apis.rentblaze.com/public/api/auth/user`,{
    //     headers:{
    //       "Authorization" : `Bearer ${get_token}`
    //     }
    //   })
    //   .then((response)=>{
    //     console.log(response)
    //   })
    //   .catch((error)=>{
    //     console.log("user Error",error)
    //   })
    // }
   

    return(
        <div className='maindiv'>
          <div>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={data.email} name='email' onChange={(e)=>setData({...data,email:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={data.password} name='password' onChange={(e)=>setData({...data,password:e.target.value})} />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    <br/> <br/>
          </div>
        </div>
        )
}
export default Api;