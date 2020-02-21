import React, { Component } from 'react'
import { Link } from "react-router-dom";

const YOUR_APP_ID = "5388641e";
const YOUR_APP_KEY = "83e1bd61c0e0b4b574e333923ed511ca";

export default class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        console.log("Title: ", title)

        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${title}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
        console.log("Request ", req)

        const res = await req.json();
        console.log("data: ", res.hits[0].recipe);

        this.setState({ activeRecipe: res.hits[0].recipe })
        console.log("Active Recipe: ", this.state.activeRecipe)
    }

    render() {
        const recipe = this.state.activeRecipe;
        console.log("render things: ", recipe)
        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img
                            className="active-recipe__img"
                            src={recipe.image}
                            alt={recipe.label} />
                        <h3 className="active-recipe__title">{recipe.label}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span> {recipe.source} </span>
                        </h4>
                        <p className="active-recipe__website">
                            Website: <span> <a href={recipe.url} /> </span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

