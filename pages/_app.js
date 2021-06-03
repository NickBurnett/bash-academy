import App from 'next/app'
import Navigation from '../components/Navigation'
import '../styles/index.css'
import '../styles/navigation.css'
import '../styles/homepage.css'
import '../styles/faqpage.css'
import '../styles/login.css'

export default class Application extends App {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <div id='website'>
                <Navigation />
                <div id='main'>
                    <Component {...pageProps} />
                </div>
            </div >
        )
    }
}