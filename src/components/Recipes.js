import React from 'react'
import { Link } from "react-router-dom";

export const Recipes = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.recipes.map((recipe, index) => {
                    return (
                        <div
                            key={index}
                            className="col-md-4"
                            style={{
                                marginBottom: "2rem"
                            }}>
                            <div className="recipes__box">
                                <img
                                    src={recipe.recipe.image}
                                    alt={recipe.recipe.label}
                                />

                                {/*  2nd method from background-image */}

                                {/* <div className="img"
                                style={{ backgroundImage: `url(${recipe.recipe.image})`}}
                                    className="recipe__img"
                                /> */}

                                <div className="recipe__text">
                                    <h5 className="recipes__title">
                                        { recipe.recipe.label.length < 20 ? 
                                        `${recipe.recipe.label}` : 
                                        `${recipe.recipe.label.substring(0, 25)}...` }
                                    </h5>
                                    <p className="recipes__subtitle"> Publisher:
                                    <span> {recipe.recipe.source}</span>
                                    </p>
                                </div>
                                <button className="recipe_buttons ">
                                    <Link to={{ 
                                        pathname: `/recipe/${index}`,
                                        state: { recipe: recipe.recipe.label }
                                    }}>View Recipe</Link>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
