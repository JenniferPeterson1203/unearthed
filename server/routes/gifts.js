import express from 'express'
import path from 'path'
/**💡 The path module provides utilities for working with file and directory paths. It can be used to manipulate file paths, normalize them, join them together, and extract information such as the directory name, file name, and file extension. */

import { fileURLToPath } from 'url'
/**💡 The fileURLToPath function is a utility function that converts a file URL to a file path. It takes a single argument, which is a file URL in the form of a string, and returns a file path in the form of a string. This function is useful when working with file URLs in Node.js, as many Node.js APIs expect file paths rather than file URLs. */

//import giftData from '../data/gifts.js' // Importing the data we just made

// Import our controller that talks to the database
import GiftsController from '../controllers/gifts.js'


// These two lines help Node.js understand where files are located on your computer
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
/**💡 The import.meta.url is a special property that contains the URL of the current module file. This URL can be used to determine the file path of the module file using the fileURLToPath function. */

// Create a new Express router
// Routers help organize routes for specific parts of the application
const router = express.Router()

// This route sends ALL the gift data as JSON when someone hits /gifts  
//the endpoint responds with the status code 200 and sends a JSON of the giftData array, which contains all the gift information.
// router.get('/', (req, res) => {
//   res.status(200).json(giftData)
// })

// GET /gifts
// Instead of manually returning gift data from a file,
// we now call the controller which fetches data from the database
router.get('/', GiftsController.getGifts)

// GET /gifts/:giftId
// This route will serve the HTML page for an individual gift
// The frontend will later use the giftId to request specific gift data
router.get('/:giftId', (req, res) => {

  // sendFile sends an HTML file from the public folder
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

// Export the router so server.js can use it
export default router