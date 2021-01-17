import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Amiibo from '../../pages/AmiiboPage/Amiibo';
import Contactpage from '../../pages/ContactPage/ContactPage';
import GameSeriesPage from '../../pages/GameSeriesPage/GameSeriesPage';
import HomePage from '../../pages/HomePage/HomePage';

export default function Routes() {
    return (
        <Switch>
        <Route path="/contact">
                <Contactpage></Contactpage>
            </Route>
            <Route path="/gameseries">
                <GameSeriesPage></GameSeriesPage>
            </Route>
            <Route path="/amiibo">
                <Amiibo></Amiibo>
            </Route>
            <Route path="/">
                <HomePage></HomePage>
            </Route>

        </Switch>
    )
}