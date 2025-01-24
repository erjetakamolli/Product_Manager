const Product = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
};

module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then(products => response.json(products))
        .catch(err => response.json(err));
};

module.exports.getProductById = (request, response) => {
    Product.findById(request.params.id)
        .then(product => response.json(product))
        .catch(err => response.json(err));
};

module.exports.updateProduct = (request, response) => {
    Product.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
        .then(updateProduct => response.json(updateProduct))
        .catch(err => response.json(err));
};

module.exports.deleteProduct = (request, response) => {
    Product.findByIdAndDelete(request.params.id)
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
};