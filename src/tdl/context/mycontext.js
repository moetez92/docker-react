import React, { Component,createContext } from 'react'
export const MMycontext = React.createContext();
export class Mycontext extends Component {

    constructor(props){
        super(props)
        this.state={
            inputText:"",
            inputSearch:"",
            tasks:[]
        }
        this.inputtext=this.inputtext.bind(this);
        this.addtask=this.addtask.bind(this);
    }

    inputtext(e){
       this.setState({
         inputText:e.target.value
       
       }) ; 
    }
     addtask(){
      this.setState(
        {
        
            tasks:[...this.state.tasks,{id:"1",title:this.state.inputText}],
            inputText:"",
          }
      ) ;
        
     } ;
 
    render() {
        return (
        <MMycontext.Provider value={{...this.state,taskhandler:this.addtask, inputtexthandler:this.inputtext}}>
             {this.props.children}
        </MMycontext.Provider>
               
        
        )
    }
}
