require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productsRouts = require('./routes/products')

const fs = require('fs');
const cors = require('cors')

const port = process.env.PORT || 4000;
const mongoUrl = process.env.MONGO_URL;

// mongo db connection 
mongoose
  .connect(`${mongoUrl}/mydatabase`)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// express app
const app = express();
app.use(express.json())
app.use(cors())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/products',productsRouts)
// PORT
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
