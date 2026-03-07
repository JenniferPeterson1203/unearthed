// Import the database connection pool from the database configuration file
// The pool allows us to send queries to our PostgreSQL database
import { pool } from '../config/database.js'


// This function will handle requests to get all gifts from the database
// It is an async function because database queries take time and return promises
const getGifts = async (req, res) => {

    try {
        // Send a SQL query to the database using the pool
        // SELECT * means "get all columns"
        // FROM gifts means "from the gifts table"
        // ORDER BY id ASC means sort the results by id from smallest to largest
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')

        // Send a successful HTTP response back to the client
        // status(200) means "OK" or successful request
        // results.rows contains the actual data returned from the database
        // .json() sends the data in JSON format so the frontend can use it
        res.status(200).json(results.rows)

    } catch (error) {

        // If something goes wrong (for example database connection fails),
        // this catch block will run

        // status(409) indicates there was a conflict or error processing the request
        // We send back an object containing the error message
        res.status(409).json({ error: error.message })
    }
}


// Export this function so other files (like routes) can use it
// We export it as an object so more controller functions can be added later
export default {
  getGifts
}