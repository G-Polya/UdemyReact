import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state  = {
    persons : [
      {name: 'Max', age:28},
      {name: 'Maru', age: 20},
      {name:"Stephanie", age:26}
    ]
  }

  switchNameHandler = ()=>{
    //console.log("Was clicked!")
    // DON'T DO THIS: this.state.persons[0].name = "Maximilan"
    this.setState({persons: [
      {name: 'Maximilian', age:28},
      {name: 'Maru', age: 29},
      {name:"Stephanie", age:27}
    ]})
  }

  render(){
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <h1>Another Heading</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        {/* <Person name={this.state.persons[0].nam1} age={this.state.persons[0].age}/> */}
        {/* <Person name="Manu" age="29">My hobbies : racing  </Person>
        <Person name="Stephanie" age="26"/> */}
      </div>
      
    )
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null ,"Hi, I'm a React App!!"));
  }
  
  
}


export default App;

