import React,{useState} from 'react'
 
import useToggle from './toogle';
import useInput from './inputhook'
export default function Counterhooks() {
      const [count,setcount] =useState(0);
      const [display,setdisplay]=useToggle(false);
      const [input,setInput]=useInput("")
     
    return (
       
        <div>
             
                <p>counter is {count}</p>
                 <button onClick={()=>setcount(count+1)}>ADD</button>
                <p>{display?"happy":"sad"}</p>
                <button onClick={()=>setdisplay()}></button>
                 <input onChange={setInput}/>
                <p>{input}</p> 
            
        </div>
    )
}
