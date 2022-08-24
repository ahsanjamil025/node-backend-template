const { rented_Book_by_customer } = require("../../services/assign_book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const rented_book = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await rented_Book_by_customer(
      req.user,
    );

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }

    if (!auth) {
      return res.status(403).json({
        code: 403,
        message: error_message,
      });
    }

    res.status(200).json({
      code: 200,
      message:"Rented book detail",
      assigned_books: data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = rented_book;
