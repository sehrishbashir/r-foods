//  total count of:
//  rice          5617
//  chicken       13382
//  chinese       461
//  ice cream     1739



import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import { Recipes } from './components/Recipes';

const YOUR_APP_ID = "5388641e";
const YOUR_APP_KEY = "83e1bd61c0e0b4b574e333923ed511ca";

class App extends Component {
  state = {
    hits: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    console.log("recipe name: ", recipeName);

    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
    console.log("response: ", api_call);

    const data = await api_call.json();
    console.log("data: ", data);

    this.setState({ hits: data.hits });
    console.log("show state work ", this.state.hits);

  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes })
  }

  componentDidUpdate = () => {
    const recipes =  JSON.stringify(this.state.hits);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.hits}/>
      </div>
    );
  }
}

export default App;