const Product = require('../db/product-data')
const express = require('express')
const router = express.Router()


router.get('/prods', (req, res) => {
    res.render('prods')
})

//To Get All Products
router.get('/product', async (req, res) => {
    try {
        const product = await Product.find({})
        res.send(product)
    } catch (e) {
        res.status(400).send()
    }
})

//To Create a new product
router.post('/product/create', async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(401).send(product)

    } catch (e) {
        res.status(400).send()
    }
})

//To Update a product 
router.patch('/product/update', async (req, res) => {
    try {
        const updProd = { ProductName: req.body.ProductName }
        const product = await Product.findOneAndUpdate({ ProductId: req.body.ProductId }, updProd, { new: true })

        res.send(product)
    } catch (e) {
        res.status(400).send()
    }
})

//To Delete a product
router.delete('/product/delete', async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ ProductId: req.body.ProductId })
        res.send(product)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router