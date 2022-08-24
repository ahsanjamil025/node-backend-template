const { Product, validate } = require('../../models/product');

const showProduct = async (req, res) => {
    const product = await Product.find().sort('name');
    res.send(product);
    
};

module.exports = showProduct;
