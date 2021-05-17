import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '@style/navigation.css'
export default class Navigation extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        let redirect = undefined
        if (this.state.route) {
            redirect = <Redirect to={this.state.route} />
        }
        return (
            <div id='navigation'>
                {redirect}
                <div id='nav-logo' onClick={() => this.setState({ route: '/' })}>
                    <svg style={{ width: 'var(--size)', height: 'var(--size)' }} focusable="false" data-prefix="fas" data-icon="terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"></path>
                    </svg>
                    <div style={{ fontWeight: 'bolder' }}>v0.0.1</div>
                </div>
                <ul id='nav-list'>
                    {/* LEARN */}
                    <li className='nav-item' style={{ '--i': '0' }}>
                        <svg focusable="false" data-prefix="fas" data-icon="book-reader" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path>
                        </svg>
                        <span className='nav-item-text'>Learn</span>
                    </li>
                    {/* FAQ */}
                    <li className='nav-item' style={{ '--i': '1' }}>
                        <svg onClick={() => this.setState({ route: '/faq' })} style={{ '--factor': '1', width: 'calc(var(--size) * var(--factor))', height: 'calc(var(--size) * var(--factor))'}}focusable="false" data-prefix="fas" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
                        </svg>
                        <span className='nav-item-text'>FAQ</span>
                    </li>
                    {/* SIGNIN/SIGNOUT */}
                    <li className='nav-item' style={{ '--i': '2' }}>
                        <svg onClick={() => this.setState({ route: '/login' })} focusable="false" data-prefix="fas" data-icon="sign-in-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                        </svg>
                        <span className='nav-item-text'>Sign-In</span>
                    </li>
                </ul>
            </div>
        )
    }
}