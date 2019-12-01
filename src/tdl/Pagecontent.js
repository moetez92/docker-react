import React, { Component } from 'react'

export default class Pagecontent extends Component {
    render() {
        const style = {
            height:'100vh',
            width:'100vw',
            display:'flex', 
            
            alignItems:'center',
            flexDirection:'column',
            paddin:'0' 
            
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
