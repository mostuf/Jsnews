  
const express = require('express');
const router = express.Router();
const article = require('../controller/article');


router.get('/', article.getLastFive)
router.get('/:id', article.getById)
router.post('/', article.getFavorite)

module.exports = router;