import React, {useContext} from 'react'
import {MMycontext} from './context/mycontext'

export default function Form() {
 const context = useContext(MMycontext);
    const style={
        height:'30vh',
        width: '40vw', 
        marginTop:'1rem',
        border: 'solid 1px grey',
        padding:'20px'
 
    }
    const {inputText} = context ; 
    console.log(inputText) ;
    return (
        <div style={style} >
         <input className="form-control form-control-lg"   value={inputText} onChange={context.inputtexthandler}type="text"/>
         <button style={{marginTop:"50px"}}className="btn btn-primary btn-block" onClick={context.taskhandler}>Add </button>
        </div>
    )
}
