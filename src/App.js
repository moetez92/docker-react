import React from 'react';
import './App.css';
import {Mycontext} from './tdl/context/mycontext';
import Navbar from './tdl/Navbar' ;
import Form  from './tdl/Form' ;
import List  from './tdl/list' ; 
import Pagecontent from './tdl/Pagecontent' ; 

 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
  <Mycontext>
     <Navbar/>
  <Pagecontent>
    <Form/>
    
    <List/>
   
   
  </Pagecontent>
   </Mycontext>
  
     
  );
}

export default App;
