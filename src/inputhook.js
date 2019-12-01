 
import {useState} from 'react' ;

function useInput(initalVal){
    const[input,setInput]=useState(initalVal);
    const inputOnchange =(e)=>{
       setInput(e.target.value);
    }
    return [input,inputOnchange];
}
export default useInput ; 