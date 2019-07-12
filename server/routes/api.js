// require('dotenv').config()


const API_KEY = `bf43a361e9f6499da5e91419191007`
const express = require('express')
const router = express.Router()
const request = require('request')
const City = require('../model/City')
// router.get('/city/:cityName', function(req, res){

// })

router.get('/city/:cityName', function (req, response) {
    console.log('fml')
    request(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${req.params.cityName}`, function (err, city) {

        let data = JSON.parse(city.body)
        response.send(data)
    })

})


router.get('/cities', function (request, response) {
    City.find({},{
        name:1,
        updatedAt:1,
        _id: 0,
        temperature:1,
        condition:1,
        conditionPic:1,
    }, (err, data) => response.send(data))
 })

router.post('/city', function (req, res) {
    const cityData = req.body
    let newCity = new City(cityData)
    newCity.save(() => res.json({ success: true }))
})

router.delete('/city/:cityName', function (request, response) {
    let nameof = request.params.cityName
    City.findOne({name:nameof}).exec(function(err,data) {
        data.remove()
    })
    response.end()
 
 })

module.exports = router;