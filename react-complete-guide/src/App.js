import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person.js'

function App() {
  
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <h1>Another Heading</h1>
      <p>This is really working!</p>
      <Person></Person>
    </div>
    
  )
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null ,"Hi, I'm a React App!!"));
  
}

export default App;
