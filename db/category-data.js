const mongoose = require('mongoose')

const categoryData = mongoose.Schema({
    CategoryId: {
        type: Number,
        unique:true,
        required: true
    },
    CategoryName: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('category', categoryData)

module.exports = Category