const Joi = require('joi');
const joiObjectid = require('joi-objectid');
const _ = require("lodash");
const timestamps = require("mongoose-timestamp");
const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  price :{
    type: Number,
    required: true,
    min: 0
  },
  detail :{
    type: String
  }
});


proSchema.plugin(timestamps);


proSchema.methods.toJSON = function () {
  const product = this;
  const productObject = product.toObject();
  const productJson = _.pick(productObject, [
    "_id",
    "name",
    "price",
    "detail",
  ]);
  return productJson;
};


function validateProduct(product) {
  const schema = {
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
    detail: Joi.string()
  };

  return Joi.validate(product, schema);
}

const Product = mongoose.model('Product', proSchema);

exports.Product = Product; 
exports.validate = validateProduct;