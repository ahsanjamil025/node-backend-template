const { Product, validate } = require('../models/product');

const new_product = async (product_data) => {
  const new_product = new Product(product_data);
  return await new_product.save();
};

const find_product_by_id = async (id) => {
  return await Product.findOne({ _id: id });
};

const total_product = async (id) => {
  return await Product.find().count();
};

const latest_product = async (id) => {
  return await Product.find().sort({ createdAt: -1 }).limit(5);
};

const delete_product_by_id = async (product_id) => {
  return await Product.findByIdAndDelete(product_id);
};

const pagination_product = async (skip, limit) => {
    return await Product.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  };



module.exports = {
    new_product,
    find_product_by_id,
    total_product,
    latest_product,
    delete_product_by_id,
    pagination_product,
};
