import React,{useContext} from 'react'
import {MMycontext} from './context/mycontext';
import Todo from './todo'
import Search from './search'; 
export default function List(props) {
   const  context =useContext(MMycontext);
      
    const style={
         border:'1px solid grey' ,
         marginTop:'10px' ,
          padding:'10px 0',
          width: '40vw',
          overflow:'hidden',
         display:'flex',
        flexDirection:'column',
        //  justifyContent:"center",
         alignItems:'center'
        
       
        
    }
    return (
         
        <div style={style}>
        <Search/>
         {context.tasks.map(task=><Todo key={task} title={task.title}/>)}
        </div>
    )
}
