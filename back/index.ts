import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import path from 'path'
import { register } from './api/api'
import { cloud } from './api/cloud'

// Basic server environment setup.
config()
export const env = process.env

const app = express()
const PORT = env.PORT || 3000
app.use(express.static(path.join(__dirname, 'static')))
app.use(cors())
app.use(json())

// API Listeners
app.post('/api/register', async (req, res) => {
    const cred = req.body
    const response = await register(cred.email, cred.password)
    res.send(response)
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}...`)
    cloud.firestore.doc('test/test').set({ test: 'test'})
})