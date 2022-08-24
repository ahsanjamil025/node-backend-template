const { bookDetail } = require("../../services/book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const book_detail = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await bookDetail(req.params.id);

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }

    res.status(200).json({
      code: 200,
      message: "Book Detail",
      data
      
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = book_detail;
