import React,{useState,useEffect} from 'react' ;
import axios from 'axios' ;



export default function Film(){
const [film,setFilm] = useState("") ;
const [number,setNumber]=useState(1) ; 
 useEffect(()=>{
      function getfilm(){
       return new Promise(res=>{
       res(axios.get(`http://swapi.co/api/films/${number}`));
       })
      
      
      
     };
    getfilm().then(response=>setFilm(response.data.title)) ;
 },[number])
    
    return (
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
              <p>the  title is {film}</p>
              <select  onChange={e=>setNumber(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
              <button>Click me hit me</button>

         </div>
         


    )
}
 