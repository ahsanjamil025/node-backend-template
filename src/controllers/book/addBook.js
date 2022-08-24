const {validateBook} = require("../../utils/validation/book");
const { newBook } = require("../../services/book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const new_book = async (req, res) => {
  try {
    //validate Request Body
    try {
      await validateBook(req.body);
    } 
    catch (e) {
      return res
        .status(400)
        .json({ code: 400, message: e.details[0].message.replace(/\"/g, "") });
    }

    const { error, auth, error_message, data } = await newBook(req.body);

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }


    res.status(200).json({
      code: 200,
      message: "Book Added successfully",
      action: data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = new_book;
