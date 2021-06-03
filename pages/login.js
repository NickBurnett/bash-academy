import { Component } from 'react'
import Link from 'next/link'
import { svgs, register, validateEmail, validatePassword } from './index'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id='authentication-page'>
                <div id='authentication-container'>
                    <div id='authentication-title'>Login</div>
                <div id='authentication-email' className='authentication-section'>
                    <span className='authentication-field-title'>Email<br /></span>
                    <input onChange={() => validateEmail()} spellCheck='false' className='authentication-field' placeholder='Email Address'></input>
                </div>
                <div id='authentication-password' className='authentication-section'>
                    <span className='authentication-field-title'>Password<br /></span>
                    <input onChange={() => validatePassword()} spellCheck='false' type='password' className='authentication-field' placeholder='Password'></input>
                </div>
                    <div id='authentication-buttons'>
                            {//<div className='authentication-button'>{svgs.google}</div>
                                //<div className='authentication-button'>{svgs.github}</div>
                            }
                        <div id='login'>Login</div>
                        <Link href='/register'><div id='register'>Register</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}