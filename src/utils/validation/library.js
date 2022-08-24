const Joi = require("joi");

function validateLibray(body) {
  const schema = {
    library_name: Joi.string().required().min(3).trim(),
    city:         Joi.string().required().min(4).trim(),
    address:      Joi.string().required().min(3).trim(),
    post_code:    Joi.string().required().min(3).trim(),
  };
  return Joi.validate(body, schema);
}

module.exports={
    validateLibray,
}