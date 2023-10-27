const mongoose = require('mongoose');

const products = new mongoose.Schema({
    title:String,
    price:Number,
    img:String,
    category:String,
})

let pro = mongoose.model("pro" , products)

module.exports =pro