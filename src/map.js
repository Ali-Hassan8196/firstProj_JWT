import React from 'react';
import './task1.css';
import { Button } from 'react-bootstrap';

function Mapp({data, del, i,editdataid}){
    return (
       <tr key={i}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.Gender}</td>
        <td>{data.contact}</td>
        <td><Button onClick={()=>del(data.id)}>Delete</Button>
        &nbsp; <Button onClick={(e)=>editdataid(e, data)}>Edit</Button>
        </td>

       </tr>
    )
}
export default Mapp;