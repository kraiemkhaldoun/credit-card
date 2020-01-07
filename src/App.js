

import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { codeCarte:'',dateCarte:'',nomCarte:''

  }
}
code = (event)=>{
  if (event.target.value.match(/^[0-9]+$/g))
  this.setState({ codeCarte:event.target.value})
  else if (event.target.value==="")
  {
    this.setState({codeCarte:""})
  }

}
name = (n)=>{
  if (n.target.value.match(/^[a-z-A-Z]+$/g))
  this.setState({ nomCarte:n.target.value})
  else if (n.target.value==="")
  {
    this.setState({nomCarte:""})
  }
  }
date = (d)=>{
  if(d.target.value.match((/^[0-9]+$/g)))
  this.setState({ dateCarte:d.target.value})
  else if (d.target.value==="")
  {
    this.setState({dateCarte:""})
  }

}


  render() { 
    return (<div className="menu">
      <div className="image">
      <h1>
      {this.state.codeCarte.padEnd(16, '*')}
      </h1> 
    <h1>    
      {this.state.nomCarte.toUpperCase()}
    </h1>
    <div className="date">
    <h1 >

      {this.state.dateCarte.slice(0,2).padEnd(2, '*')+'/'+this.state.dateCarte.slice(2,4).padEnd(2, '*')}
    </h1>


    </div>

  
 
      </div>
      <div className="colonnes">
      <input onChange={this.code} maxLength="16"/>
      <input onChange={this.name} maxLength="16"/>
      <input onChange={this.date}  maxLength="4"/>
    
      </div>
     

    </div>  );
  }
}
 
export default App;


