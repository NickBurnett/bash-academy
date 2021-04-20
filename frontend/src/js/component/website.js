import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from '@component/navigation'
import Home from '@component/home'
import FAQ from '@component/faq'
import '@style/index.css'
export default class Website extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='website'>
                <Navigation />
                <div id='main'>
                    <Switch>
                        <Route path='/faq' component={FAQ} />
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        )
    }
}