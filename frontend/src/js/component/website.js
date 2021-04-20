import React, { Component } from 'react'
import Navigation from '@component/navigation'
export default class Website extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='website'>
                <Navigation />
            </div>
        )
    }
}