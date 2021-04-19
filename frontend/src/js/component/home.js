import React, { Component } from 'react'
import { show } from '@/index'
import '@style/home.css'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        setTimeout(() => {
            function callback() {
                const home = document.getElementById('home-page')
                if (!home) {
                    setTimeout(() => callback(), 200)
                    return
                }
                const arr = []
                for (let e of home.children[0].children) {
                    arr.push(e)
                }
                for (let e of home.children[1].children) {
                    arr.push(e)
                }
                let i = 1
                for (let e of arr) {
                    setTimeout(() => {
                        show(e)
                    }, 300 * i)
                    i += 1
                }
            }
            callback()
        }, 2000)
        return (
            <div id='home-page'>
                <div id='home-title'>
                    <span className='home-title-text hidden' style={{ '--i': '0' }}>Project</span> <span className='home-title-text hidden' style={{ '--i': '1' }}>Bash</span> <span className='home-title-text hidden' style={{ '--i': '2' }}>Academy</span>
                </div>
                <div id='home-subtitle'>
                    <span className='home-title-text hidden' style={{ '--i': '3' }}>an online learning platform for Linux</span>
                </div>
            </div>
        )
    }
}