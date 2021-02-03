import React, { Component } from 'react'
import { Switch, Route, } from "react-router-dom";
import Baptisim from './sacrament-text/Baptisim';
export default class SacrRender extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/sacraments/baptisim'>
                    <Baptisim/>
                    </Route> 
                </Switch>
            </div>
        )
    }
}
