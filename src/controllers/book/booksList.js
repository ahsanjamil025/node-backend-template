const {booksList } = require("../../services/book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const books_list = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await booksList();

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }

    res.status(200).json({
      code: 200,
      message: "All  Books",
      data

    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = books_list;
