const path = require('path')
const express = require('express')
require('../db/mongoose')
const categoryRouter = require('../router/category')
const productRouter = require('../router/product')

const app = express()
const port = process.env.PORT || 3000

const public = path.join(__dirname, '../public')
app.use(express.static(public))

app.use(express.json())
app.use(categoryRouter)
app.use(productRouter)

app.listen(3000, () => {
    console.log('Server is running!')
})