const mongoose = require('mongoose')

const productData = mongoose.Schema({
    ProductId: {
        type: Number,
        unique:true,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    CategoryId: {
        type: Number,
        required: true,
    },
    CategoryName: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('products', productData)

module.exports = Product