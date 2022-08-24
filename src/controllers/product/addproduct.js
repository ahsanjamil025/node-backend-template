const { validateCustomerSignup } = require("../../utils/validation/customer");
const { signupCustomer } = require("../../services/customer");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");
const { Product, validate } = require('../../models/product');

const addProduct = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = new Product({ name: req.body.name, price:req.body.price, detail:req.body.detail });
    product = await product.save();
    res.send("Product added!...");
};

module.exports = addProduct;
