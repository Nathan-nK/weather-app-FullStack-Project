const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema



const DBSchema = new Schema( {
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
} )
const DB = mongoose.model( 'DB', DBSchema )
module.exports = DB
