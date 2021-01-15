const express = require('express')
const News = require('../models/news')
const router = new express.Router()

router.post('/newsData', async (req, res) => {
    const news = new News(req.body)
    try {
        await news.save()
        res.status(201).send(news)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/newsData', async (req, res) => {
    try {
        const news = await News.find({})
        res.send(news)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/newsData/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const news = await News.findById(_id)

        if (!news) {
            return res.status(404).send()
        }

        res.send(news)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/newsData/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'title', 'author', 'date']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!news) {
            return res.status(404).send()
        }

        res.send(news)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/newsData/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id)

        if (!news) {
            return res.status(404).send()
        }

        res.send(news)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router