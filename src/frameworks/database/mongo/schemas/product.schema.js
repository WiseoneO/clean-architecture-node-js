const mongoose = require("mongoose");

const {Schema} = mongoose;

module.exports = new Schema({

        name : String,
        price : Number,
        color : String,
        description : String,
        images : Array(String),
        meta : Object,
        deletedAt : Date,
        createdAt : Date

})