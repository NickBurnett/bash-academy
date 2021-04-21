import React, { Component } from 'react'
import '@style/homepage.css'
export class HomeInfo extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const title = this.props.title
        const desc = []
        if (this.props.desc) {
            for (let d of this.props.desc) {
                desc.push(<div key={d} className='home-info-item-desc-item'>{d}</div>)
            }
        }
        return (
            <div className='home-info-item' style={{ '--i': this.props.i }}>
                <div className='home-info-item-title'>{title}</div>
                <div className='home-info-item-desc'>
                    {desc}
                </div>
            </div>
        )
    }
}
export default class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const info = [
            <HomeInfo i='0' key='0' title='Learn it all' desc={[ 'Linux command-line', 'Linux architecture', 'Software Development in Linux' ]}/>,
            <HomeInfo i='1' key='1' title='Learn by doing' desc={[ 'Interactive lessons', 'Accurately simulated environments', 'Practical problem sets' ]}/>,
            <HomeInfo i='2' key='2' title='Customize your learning' desc={[ 'Lesson tracking', 'Weekly reports', 'Live updates' ]}/>
        ]
        return (
            <div id='home-page'>
                <div id='home-title'>
                    <span className='home-title-text' style={{ '--i': 0 }}>Project</span> <span className='home-title-text' style={{ '--i': 1 }}>Bash</span> <span className='home-title-text' style={{ '--i': 2 }}>Academy</span>
                </div>
                <div id='home-subtitle'>
                    a platform designed to teach you Linux
                </div>
                <div id='home-info'>
                    {info}
                </div>
            </div>
        )
    }
}