import React, {useEffect, useState} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Home=()=>{
  const [data, setData]=useState()
  const [loading,setLoading]=useState(true)
  console.log("data",data)
  const getToken=localStorage.getItem("access_token")

    useEffect(()=>{
      const getData=async ()=>{
        await axios.get(`https://apis.rentblaze.com/public/api/auth/user`,{
          headers:{
            "Authorization" : `Bearer ${JSON.parse(getToken)}`
          }
        })
        .then((response)=>{
          console.log(response.data)
          setData(response?.data)
          // console.log(response.data.firstname)
        })
        .catch((error)=>{
          console.log("user Error",error)
        })

      }
      getData()
    },[])
    return(
      <div>
        <div style={{textAlign:'center'}}> 
         <h1>{`This is ${data?.firstname}'s Profile`}</h1>
         <button onClick={()=>{localStorage.removeItem("access_token")
          window.location.href="/"}}>Log out</button>
          
          <div>
          {
            data?.assigned_roles?.map((item,i)=>{
              return <div key={i} style={{display:"flex"}}><p>{item?.id}</p>
              </div>
            })
          }
          </div>
          
          
        </div>
        </div>
    )
}

export default Home;




// const handleUser= async(e)=>{
//   const get_token = JSON.parse(localStorage.getItem("access_token"));
//   await axios.get(`https://apis.rentblaze.com/public/api/auth/user`,{
//     headers:{
//       "Authorization" : `Bearer ${get_token}`
//     }
//   })
//   .then((response)=>{
//       setItemss(response.data)
//     console.log(response.data.firstname)
//   })
//   .catch((error)=>{
//     console.log("user Error",error)
//   })
// }