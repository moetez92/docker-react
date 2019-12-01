import React, { Component} from 'react'
export const CContext =  React.createContext() ;
export  class Mycontext extends Component {
    constructor(props){
        super(props)
        this.state={
            dark:false 
        }
    }
    render() {
        return (
           <CContext.Provider value={this.state}>
               {this.props.children}
           </CContext.Provider>
        )
    }
}
