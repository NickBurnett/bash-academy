import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { svgs } from '@/index'
import '@style/login.css'
import { register } from '../../api'
function validateEmail() {
    const regex = /^[a-zA-Z0-9_\.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
    const e = document.getElementById('authentication-email').children[1]
    const email = e.value
    let color = '--red-b'
    if (email.match(regex)) color = '--green-c'
    if (email === undefined || email === '') color = '--white-a'
    e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(color))
}
function validatePassword() {
    const e = document.getElementById('authentication-password').children[1]
    const password = e.value
    let color = '--red-b'
    if (password.length >= 8) color = '--green-c'
    if (password === undefined || password === '') color = '--white-a'
    e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(color))
    validateConfirm()
}
function validateConfirm() {
    const e = document.getElementById('authentication-password-conf').children[1]
    const password = e.value
    const real = document.getElementById('authentication-password').children[1].value
    let color = '--red-b'
    if (password === real) color = '--green-c'
    if (password === undefined || password === '') color = '--white-a'
    e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(color))
}
export class Login extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <div id='authentication-page'>
                <div id='authentication-container'>
                    <div id='authentication-title'>Login</div>
                    <div id='authentication-email' className='authentication-section'>
                        <span className='authentication-field-title'>Email<br/></span>
                        <input onChange={() => validateEmail()} spellCheck='false' className='authentication-field' placeholder='Email Address'></input>
                    </div>
                    <div id='authentication-password' className='authentication-section'>
                        <span className='authentication-field-title'>Password<br /></span>
                        <input onChange={() => validatePassword()} spellCheck='false' type='password' className='authentication-field' placeholder='Password'></input>
                    </div>
                    <div id='authentication-buttons'>
                        <div className='authentication-button'>{svgs.google}</div>
                        <div className='authentication-button'>{svgs.github}</div>
                        <div id='login'>Login</div>
                        <div id='register' onClick={() => this.setState({ redirect: 'register' }) }>Register</div>
                    </div>
                </div>
            </div>
        )
    }
}
export class Register extends Component {
    constructor() {
        super()
        this.state = {}
    }
    async handleRegister() {
        const email = document.getElementById('authentication-email').children[1].value
        const password = document.getElementById('authentication-password').children[1].value
        const res = (await register(email, password)).data
        let err = ''
        switch (res.code) {
            case 1:
                err = 'Email already registered.'
                break;
        }
        this.setState({ err })
    }
    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <div id='authentication-page'>
                <div id='authentication-container'>
                    <div id='authentication-title'>Register</div>
                    <div id='authentication-msg'>{this.state.err}</div>
                    <div id='authentication-email' className='authentication-section'>
                        <span className='authentication-field-title'>Email<br/></span>
                        <input onChange={() => validateEmail()} spellCheck='false' className='authentication-field' placeholder='Email Address'></input>
                    </div>
                    <div id='authentication-password' className='authentication-section'>
                        <span className='authentication-field-title'>Password<br /></span>
                        <input onChange={() => validatePassword()} spellCheck='false' type='password' className='authentication-field' placeholder='Password'></input>
                    </div>
                    <div id='authentication-password-conf' className='authentication-section'>
                        <span className='authentication-field-title'>Confirm Password<br /></span>
                        <input onChange={() => validatePassword()} spellCheck='false' type='password' className='authentication-field' placeholder='Password'></input>
                    </div>
                    <div id='authentication-buttons'>
                        <div id='login' onClick={() => this.setState({ redirect: 'login' })}>Login</div>
                        <div id='register' onClick={() => this.handleRegister()}>Register</div>
                    </div>
                </div>
            </div>
        )
    }
}