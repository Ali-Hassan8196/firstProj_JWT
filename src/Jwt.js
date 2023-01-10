import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const JWT=()=>{
    const [data,setData]=useState({email:"owner@rentblaze.com",password:"123456789"});

    const token=`https://apis.rentblaze.com/public/api/auth/user`;
    const handlesubmit= async(e)=>{
     e.preventDefault();
     await axios.post(`https://apis.rentblaze.com/public/api/auth/login_grant`,data,
     
     )
     
     .then((response)=>{
        
        localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
        const gettoken= localStorage.getItem("access_token");
        if(gettoken){
            window.location.href="/Home";
        }
        console.log(response.data);

     })
     .catch((error)=>{
        console.log("Error",error)
     })

    }
      
    return(
        <div className='maindiv'>
          <div>
          <Form onSubmit={handlesubmit}>
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
          </div>
        </div>
    )
}
export default JWT;













 //   useEffect(()=>{
    //     axios.post(`https://apis.rentblaze.com/public/api/auth/login_grant`,items).
    //     then((response)=>{
    //         console.log(response.data);
    //         const a="myTokenIs"
    //     localStorage.setItem("access_token",a) ;    
    //     })
    //     .catch((error)=>{
    //         console.log("Error",error);
    //     })
    //   },[])