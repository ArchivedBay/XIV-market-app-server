const cron = require('node-cron');
const express = require('express'); // node framework
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

// NEW EXPRESS INSTANCE & PORT
const app = express();
const PORT = process.env.PORT || 5000;

// MODEL ROUTES
const marketSales = require('./routes/api/marketSales');

// DB CONNECTION
mongoose.connect(db)
  .then( () => console.log('Successfully communicating with Hydaelyn!') )
  .catch( error => console.log(error) );

// BODY PARSER MIDDLEWARE
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use('/api/marketSales', marketSales);

// ROOT ROUTE
app.get('/', (req,res) => res.send('Home Page') )

// start the server listening on the given port
app.listen(PORT, () => console.log(`Firing up FTL on port ${PORT}`) );