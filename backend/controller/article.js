const articleManager = require('../model/article');

exports.getAll = (req, res, next) => {
    res.status(200).json(articleManager.getAll());
}

exports.getById = (req, res, next) => {
    res.status(200).json(articleManager.getById(req.params.id));
}

exports.getFavorites = (req, res, next) => {
    res.status(200).json(articleManager.getFavorites(req.body.favorites));
}