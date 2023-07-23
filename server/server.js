const express = require('express')
const app = express()
const port = 8080
//May want to include your port into the .env file in the future*

//THIS ABOVE MONGOOSE CONFIG BELOW*
require('dotenv').config()

//Added for integrating mongoose
require('./config/mongoose.config')

const cors = require('cors')

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//Add cors below and add const cors above in server.js
app.use(cors())

// CHANGE ROUTEATTACHER NAME***
//import routes function: (attaches all our routes to our app)
//Reminder to change
const routeAttacher = require('./routes/trip.routes')

routeAttacher(app)

//server/port status:
app.listen( port, () => console.log(`Server Live on Port: ${port}`));