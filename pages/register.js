import { Component } from "react";
import Link from 'next/link'
import { validateEmail, validatePassword, register } from './index'
async function handleRegister() {
    const email = document.getElementById('authentication-email').children[1].value
    const password = document.getElementById('authentication-password').children[1].value
    const res = (await register(email, password)).data
    let err = ''
    switch (res.code) {
        case 1:
            err = 'Email already registered.'
            break;
    }
}
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
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
                        <Link href='/login'><div id='login'>Login</div></Link>
                        <div id='register' onClick={() => handleRegister()}>Register</div>
                    </div>
                </div>
            </div>
        )
    }
}