const Category = require('../db/category-data')
const Product = require('../db/product-data')
const express = require('express')
const router = express.Router()


router.get('/categories', (req, res) => {
    res.render('categories')
})
//To Get All categories
router.get('/category', async (req, res) => {
    try {
        const category = await Category.find({ })
        res.send(category)
    } catch (e) {
        res.status(400).send()
    }
})

//To create a category
router.post('/category/create', async (req, res) => {
    try {
        const categoryToSave = new Category(req.body)
        await categoryToSave.save()
        res.status(201).send(categoryToSave)
    } catch (e) {
        res.status(400).send()
    }
})

router.patch('/category/update', async (req, res) => {
    try {
        const updCategory = { CategoryName: req.body.CategoryName }
        const category = await Category.findOneAndUpdate({ CategoryId: req.body.CategoryId }, updCategory, { new: true })
        await Product.findOneAndUpdate({ CategoryId: req.body.CategoryId }, updCategory, { new: true })

        res.send(category)
    } catch (e) {
        res.status(400).send()
    }
})

//To Delete a category
router.delete('/category/delete', async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ CategoryId: req.body.CategoryId })
        res.send(category)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router