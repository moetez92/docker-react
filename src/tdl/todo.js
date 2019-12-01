import React from 'react'

export default function Todo({title}) {
    const style={
        width:'30vw',
        height:'10vh',
        borderBottom:'solid 1px grey',
        display:'flex',
        alignItems:"center",
        paddingLeft:"4px"
     
    }
    return (
        <div style={style}>
         {title}
        </div>
    )
}
