const { validateLibraryBook } = require("../../utils/validation/bookInLibrary");
const {add_book_to_library } = require("../../services/library");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const add_new_book_to_library = async (req, res) => {
  try {
    //validate Request Body
    try {
      await validateLibraryBook(req.body);
    } catch (e) {
      return res
        .status(400)
        .json({ code: 400, message: e.details[0].message.replace(/\"/g, "") });
    }

    const { error, auth, error_message, data } = await add_book_to_library(req.params.id, req.body);

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }


    res.status(200).json({
      code: 200,
      message: "Book added to library successfully",
      action: data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = add_new_book_to_library;
