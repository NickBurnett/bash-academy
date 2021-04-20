import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Website from '@component/website'
import '@style/index.css'
export function show(element) {
    element.classList.remove('hidden');
}
render(<Router><Website /></Router>, document.getElementById('root'))