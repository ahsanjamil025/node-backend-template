const Joi = require("joi");

  function validateBook(book) {
    const schema = {
        book_code:   Joi.string().min(4).required(),
        book_name:   Joi.string().min(3).required(),
        authore:     Joi.string().min(3).required()  ,
        security:    Joi.number().min(0).required(),
        book_volume: Joi.number().min(0).required() 
    };
  
    return Joi.validate(book, schema);
  };


  function validateEditBook(book) {
    const schema = {
        book_name:   Joi.string().min(3).required(),
        authore:     Joi.string().min(3).required() ,
        security:    Joi.number().min(0).required(),
        book_volume: Joi.number().min(0).required() 
    };
  
    return Joi.validate(book, schema);
  };
module.exports= {validateBook,
  validateEditBook
};
  