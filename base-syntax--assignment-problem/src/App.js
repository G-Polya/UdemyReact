import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput.js'
import UserOutput from './User/UserOutput.js'

class App extends Component {
  state = {
    username:[
      {name:"KimHeeSu"},
      {name:"KimDoHun"}
    ]
  }

  nameChangedHandler = (event) =>{
    this.setState({
      username:[
        {name: event.target.value},
        {name: event.target.value}
      ]

    })
  }
  

  render() {
    
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler}></UserInput>
        <UserOutput name={this.state.username[0].name}></UserOutput>
        <UserOutput name={this.state.username[1].name}></UserOutput>
        
        

       
      </div>
    );
  }
}

export default App;
