// require('dotenv').config()

const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const request = require ('request')
const port = 8080
const path = require( 'path' )
const api = require('./server/routes/api')
const City = require('./server/model/City')
const router = express.Router()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( express.static( path.join( __dirname, 'dist' ) ) )
app.use( '/api', router )

app.use('/', api)

mongoose.connect( 'mongodb://localhost/weatherDB', { useNewUrlParser: true } ).then( () => {
    app.listen( port, () => console.log( `Running server on port ${ port }` ) )
} )






// app.get('/weatherData', function(req , res){
//         request.get(`http://api.apixu.com/v1/current.json?key=${weatherAPI}&q=${req.params.cityName}`, function(err, data){
//             then.res.send(data)})
//         })
