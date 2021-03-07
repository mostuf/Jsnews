const articleManager = require('../model/article');

exports.getLastFive = (req, res, next) => {
    res.status(200).json(articleManager.getLastFive());
}

exports.getById = (req, res, next) => {
    res.status(200).json(articleManager.getById(req.params.id));
}

exports.getFavorite = (req, res, next) => {
    res.status(200).json(articleManager.getFavorite(req.body.favorites));
}