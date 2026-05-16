const express = require('express')
const path = require('path')
const app = express()

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// Serve static files
app.use(express.static('dist'))

// React Router fallback (Express 5 safe)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
