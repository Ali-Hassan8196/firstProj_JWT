import React, { useState } from 'react';
import './toe.css';
import Box from './box';

function Tictactoe(){
    const [turn,setTurn]=useState([null,null,null,null,null,null,null,null,null]);
    const [isxturn,setIsxturn]=useState(true)
    const clicked=(index)=>{
      const copystate=[...turn];
       copystate[index] = isxturn ? "X" : "O";
       setTurn(copystate);
       setIsxturn(!isxturn);
    };

    const checkwinner=()=>{
        const winnerlogic=[
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6],

        ];
        for(let logic of winnerlogic){
            const [a,b,c]=logic;
            if(turn[a] !== null && turn[a]===turn[b] && turn[a]===turn[c]){
                return true;
            }
        }
        return false;
    }
    const isWinner=checkwinner();

    return (
     
     <div className='mandiv'>
       { isWinner ? 
       <>
        <div className='prntdiv'>
            <Box value={turn[0]} onClick={()=>clicked(0)}  />
            <Box value={turn[1]} onClick={()=>clicked(1)} />
            <Box value={turn[2]} onClick={()=>clicked(2)} />
       </div>     
       <div className='prntdiv'>
            <Box value={turn[3]} onClick={()=>clicked(3)}  />
            <Box value={turn[4]} onClick={()=>clicked(4)} />
            <Box value={turn[5]} onClick={()=>clicked(5)} />
        </div>
        <div className='prntdiv'>
            <Box value={turn[6]} onClick={()=>clicked(6)} />
            <Box value={turn[7]} onClick={()=>clicked(7)} />
            <Box value={turn[8]} onClick={()=>clicked(8)} />
        </div>
        <h1 style={{textAlign:"center"}}>SomeOne Won</h1>
        </>
        :
        <>
        <div className='prntdiv'>
            <Box value={turn[0]} onClick={()=>clicked(0)}  />
            <Box value={turn[1]} onClick={()=>clicked(1)} />
            <Box value={turn[2]} onClick={()=>clicked(2)} />
       </div>     
       <div className='prntdiv'>
            <Box value={turn[3]} onClick={()=>clicked(3)}  />
            <Box value={turn[4]} onClick={()=>clicked(4)} />
            <Box value={turn[5]} onClick={()=>clicked(5)} />
        </div>
        <div className='prntdiv'>
            <Box value={turn[6]} onClick={()=>clicked(6)} />
            <Box value={turn[7]} onClick={()=>clicked(7)} />
            <Box value={turn[8]} onClick={()=>clicked(8)} />
        </div>
        <h1 style={{textAlign:"center"}}>Match Tied</h1>

        </>
        
        } 
     </div>
    )
} export default Tictactoe;