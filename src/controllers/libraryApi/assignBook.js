const { assign_Book_to_customer } = require("../../services/assign_book");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const assign_Book = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await assign_Book_to_customer(
      req.params.id,
      req.user,
      req.body
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
      message: "Assign book detail",
      assigned_boks: data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = assign_Book;
