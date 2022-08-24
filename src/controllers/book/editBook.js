const {validateEditBook} = require("../../utils/validation/book");
const { editbook } = require("../../services/book");
  const { RENDER_BAD_REQUEST } = require("../../utils/utils");
  
  const edit_book = async (req, res) => {
    try {
      try {
        await validateEditBook(req.body);
      } catch (e) {
        return res
          .status(400)
          .json({ code: 400, message: e.details[0].message.replace(/\"/g, "") });
      }
      const { error, auth, error_message, data } = await editbook(
        req.body,
        req.params.id,
      );
      if (error) {
        return res.status(400).json({
          code: 400,
          message: error_message,
        });
      }
      res.status(200).json({
        code: 200,
        message: "Book  edit Successfully",
        customer: data,
      });
    } catch (e) {
      RENDER_BAD_REQUEST(res, e);
    }
  };
  
module.exports = edit_book;
  