const express = require('express')
const path = require('path')
const app = express()

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// Serve static files
app.use(express.static('dist'))

// Safe fallback for React Router (no path-to-regexp)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
