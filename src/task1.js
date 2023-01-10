import React, { useState } from 'react';
import './task1.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import employees from './employees.js';
import Mapp from './map';
import Edit from './edit';
import { Fragment } from 'react';

 function Task(){
    const [data,setData]=useState(employees);
    const [items,setItems]=useState({
        id:"",name:"",email:"",gender:"",contact:"",
    });
     const [edititems,setEdititems]=useState({
        id:"",name:"",email:"",gender:"",contact:"",
     })

     const [newcontacts,setNewcontacts]=useState({
        id:"",name:"",email:"",gender:"",contact:"",
     })

    const [dataid,setDataid]=useState(null);
  
    const changetxt=(e)=>{
        e.preventDefault();
        const namess=e.target.getAttribute('name');
        const valuess=e.target.value;
        const getall={...items};
        getall[namess]=valuess;
        setItems(getall);
    };

    const changeedittext=(e)=>{
        e.preventDefault();
        const namess=e.target.getAttribute('name');
        const valuess=e.target.value;
        const getall={...edititems};
        getall[namess]=valuess;
        setEdititems(getall);
    };

    const editdataid=(e, data)=>{
        e.preventDefault();
        setDataid(data.id);
        
        const formvalues={
            id:data.id,email:data.email,gender:data.Gender,contact:data.contact,
        };
        setEdititems(formvalues);
    }
    
    const add=(e)=>{{
        e.preventDefault();
        const push={
            id:items.id,name:items.name,email:items.email,Gender:items.gender,contact:items.contact,
        };
        const pushdata=[...data,push];
        setData(pushdata);
    };
    setItems({id:"",name:"",email:"",gender:"",contact:""});
 }
   const del=(id)=>{
    const filterdata= data.filter((item)=>item.id!==id)
    setData(filterdata)
   }

   const addtoedits=(e)=>{
    e.preventDefault();
    const getnew={
        id:dataid,name:edititems.name,email:edititems.email,
        gender:edititems.gender,contact:edititems.contact,
    };
      const newcont=[...data];
      const indexx= data.findIndex((data)=>data.id===dataid);
      newcont[indexx] = getnew;
      setData(newcont);
      setDataid(null);
   }

    return(
        <div>
            <form onSubmit={addtoedits}>
          <Table striped bordered hover variant='dark'>
           <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>CONTACT</th>
                <th>ACTIONS</th>
            </tr>
            </thead>
           <tbody>
            {
                data.map((data,i)=>(
                    
                    <Fragment>
                        {
                        dataid === data.id ? <Edit data={data} 
                        changeedittext={changeedittext} addtoedits={addtoedits}
                        newcontacts={newcontacts} /> :
                       <Mapp data={data} del={del} i={i}
                       editdataid={editdataid}  />
                        }
                    </Fragment>
           ))
            }
           </tbody>
            
          </Table>
          </form>

         <div className='formdiv' style={{textAlign:'center'}}>
            <form action="" onSubmit={add}>
                <input type="number" required placeholder='enter id' value={items.id} name='id' onChange={changetxt} /> &nbsp;
                <input type="text" required placeholder='enter name...' value={items.name} name='name' onChange={changetxt} /> &nbsp;
                <input type="email" required placeholder='enter email...' value={items.email} name='email' onChange={changetxt} /> &nbsp;
                <input type="text" required placeholder='enter gender...' value={items.gender} name='gender' onChange={changetxt} /> &nbsp;
                <input type="number" required placeholder='enter contact...' value={items.contact} name='contact' onChange={changetxt} /> &nbsp;
                <Button type='submit' >Add</Button>
            </form>
         </div>

        </div>
    )
 }
 export default Task;