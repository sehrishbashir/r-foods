import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from "../App"
import Recipe from "./Recipe"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/recipe/:index" component={Recipe} />
            </Switch>
        </BrowserRouter>
    )

}

export default Router;