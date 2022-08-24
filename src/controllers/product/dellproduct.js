const { Product, validate } = require('../../models/product')

const dellProduct = async (req, res) => {

    const product = await Product.findByIdAndRemove(req.params.id);
    
    if (!product) return res.status(404).send('The product with the given ID was not found.');

    res.send("Product deleted!...");
};

module.exports = dellProduct;