const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Producto', ProductoSchema)