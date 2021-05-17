import React, { Component } from 'react'
import '@style/faqpage.css'
export class Question extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const question = this.props.question
        const answer = this.props.answer
        return (
            <div className='faq-item' style={{ '--i': this.props.i }}>
                <div className='faq-item-q'>{question}</div>
                <hr className='faq-item-x' />
                <div className='faq-item-a'>{answer}</div>
            </div>
        )
    }
}
export default class FAQ extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const faq = [
            <Question key='0' i='0'
                question='What is Bash Academy?'
                answer='Bash Academy is an open-source website designed to provide current and aspiring programmers with every tool necessary to succeed in a Linux-based environment.'
            />,
            <Question key='1' i='1'
                question='What will I learn?'
                answer={'You\'ll learn to use the Linux command-line interface, along with various tools like C-programming, in order to efficiently interact with and develop on Linux.'}
            />,
            <Question key='2' i='2'
                question='How will I learn?'
                answer={'We\'re firm believers in applying what you learn. Each lesson will give you plenty of opportunities to practice everything you\'ve learned.'}
            />,
            <Question key='3' i='3'
                question='How often will lessons be added/updated?'
                answer={'Lessons are added and updated on a rolling basis. There are so many things to cover about Linux, so we\'ll be adding more content soon!'}
            />
        ]
        return (
            <div id='faq-page'>
                <div id='faq-title'>
                    <span className='faq-title-text' style={{ '--i': 0 }}>Frequently</span> <span className='faq-title-text' style={{ '--i': 1 }}>Asked</span> <span className='faq-title-text' style={{ '--i': 2 }}>Questions</span>
                </div>
                <div id='faq-list'>
                    {faq}
                </div>
            </div>
        )
    }
}