// Import the Express framework to create our web server
import express from 'express'
//import the router from routes/gifts.js to handle requests related to gifts
import giftsRouter from './routes/gifts.js'

// Initialize the Express application
const app = express()

// Setup 'middleware' to serve static files (like CSS or images) 
// This tells the server where to look for files when a user visits the site
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
//Add the /gifys endpoint to the server, which will use the giftsRouter to handle requests to that endpoint
app.use('/gifts', giftsRouter)

// Define a 'Route' for the home page (the root '/')
// When someone visits http://localhost:3001/, they will see this message
app.get('/', (req, res) => {
  // status(200) means 'Everything is OK'
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Tell the server which 'Port' to listen on
// It uses a provided port (like on a real website) or defaults to 3001
const PORT = process.env.PORT || 3001

// Start the server!
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})