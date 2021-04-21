import React, { Component } from 'react'
import { svgs } from '@/index'
import '@style/footer.css'
export default class Footer extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const react = svgs.react
        const cloud = svgs.cloud
        const firebase = svgs.firebase
        return (
            <div id='footer'>
                {/*<div id='foot-text'>Created with </div>*/}
                <div className='foot-item'>{react}</div>
                <div className='foot-item'>{cloud}</div>
                <div className='foot-item'>{firebase}</div>
            </div>
        )
    }
}