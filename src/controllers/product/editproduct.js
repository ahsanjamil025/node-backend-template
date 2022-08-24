const { Product, validate } = require('../../models/product');

const editProduct = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = await Product.findByIdAndUpdate(req.params.id, { name: req.body.name, price: req.body.price, detail: req.body.detail }, {
        new: true
    });

    if (!product) return res.status(404).send('The product with the given ID was not found.');

    res.send("Product updated!...");

};

module.exports = editProduct;