import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0 
        }
        this.add=this.add.bind(this);
    }

    add(){
         
        this.setState(
            {counter:this.state.counter+1}
        )
    }
    render() {
         
        return (
            <div>
                <p>counter is {this.state.counter}</p>
              <button onClick={this.add}>ADD</button>
            </div>
        )
    }
}
