const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const ProductoSchema = new Schema({
    title: String, 
    body: String, 
    date: Date
})

module.exports = mongoose.model("Producto", ProductoSchema);


