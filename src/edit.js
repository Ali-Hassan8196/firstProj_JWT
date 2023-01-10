import React from 'react';
import './task1.css';
import { Table, Button } from 'react-bootstrap';
function Edit({data, changeedittext,editdataid,addtoedits}){
    return (
            <tr>
                <td>
                    <input type="text" placeholder='id'  name='id' 
                    onChange={changeedittext}/>
                </td>
                <td>
                    <input type="text" placeholder='name'  name='name'
                    onChange={changeedittext} />
                </td>
                <td>
                    <input type="text" placeholder='email'  name='email'
                    onChange={changeedittext} />
                </td>
                <td>
                    <input type="text" placeholder='gender'  name='gender'
                    onChange={changeedittext} />
                </td>
                <td>
                    <input type="text" placeholder='contact' name='contact'
                    onChange={changeedittext} />
                </td>
                <td><Button>Save</Button></td>
            </tr>
        )
}
export default Edit;