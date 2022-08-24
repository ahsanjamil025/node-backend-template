const { bookDelete } = require("../../services/book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const delete_book = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await bookDelete(req.params.id);

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }

    res.status(200).json({
      code: 200,
      message: "Book has been deleted successfuly",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = delete_book;
