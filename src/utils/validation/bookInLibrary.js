const Joi = require("joi");

function validateLibraryBook(body) {
  const schema = {
    book_name:          Joi.string().required().min(3).trim(),
    total:              Joi.number().required().min(1),
    available:          Joi.number().required().min(0),
  };
  return Joi.validate(body, schema);
}

module.exports={
    validateLibraryBook,
}