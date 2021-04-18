import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import path from 'path'
// Basic server environment setup.
config()
const app = express()
const PORT = process.env.PORT || 3100
app.use(express.static(path.join(__dirname, 'static')))
app.use(cors())
app.use(json())

// API Listeners
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}...`)
})