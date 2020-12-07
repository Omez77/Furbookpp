import React, { Component } from 'react';
import PetNav from './components/pet-nav'
import PictureBox from './components/picture-box'
import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <PetNav/>
        <div class="container">
          <div class="row">
            //Add profile picture and about section here
          </div>
          <div class="row">
            //Add posts here
          </div>
        </div>
      </div>
    )
  }

  return component
}

export default App;
