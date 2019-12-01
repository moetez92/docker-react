import React, { Component } from 'react' 
import {CContext} from './context/mycontext'

export default class Pagecontent extends Component {
    static  contextType=CContext ; 
    render() {
    //   const {dark}=this.Context ;
    //   const color= dark==false? "red" : "green" ;
   
      console.log(this.context) ;
      const styles={
            width:"100vw" , 
            height:"100vh",
            // background:`${color}`
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}
