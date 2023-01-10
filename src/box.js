import React from "react";
import './toe.css';
function Box(props){

//   const changetext = (e) => {
//     e.preventDefault();
//     const names = e.target.getAttribute('name');
//     const values = e.target.value;
//     const getall = { ...data };
//     getall[names] = values;
//     setData(getall);
// }

// const add = (e) => {
//     e.preventDefault();
//     const pushdata = {
//         email: data.email, password: data.password,
//     };
//     const addall = [...arrdata, pushdata];
//     setArrdata(addall);
// }

    return (
        <div onClick={props.onClick} >
          <div className="box">
            {props.value}
          </div>
        </div>
    )
}export default Box;