import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Website from '@component/website'
import '@style/index.css'
export function show(element) {
    element.classList.remove('hidden');
}
render(<Website />, document.getElementById('root'))