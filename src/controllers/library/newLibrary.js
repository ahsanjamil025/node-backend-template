const { validateLibray } = require("../../utils/validation/library");
const { newLibrary } = require("../../services/library");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const new_library = async (req, res) => {
  try {
    //validate Request Body
    try {
      await validateLibray(req.body);
    } catch (e) {
      return res
        .status(400)
        .json({ code: 400, message: e.details[0].message.replace(/\"/g, "") });
    }

    const { error, auth, error_message, data } = await newLibrary(req.body);

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error_message,
      });
    }


    res.status(200).json({
      code: 200,
      message: "Library Added successfully",
      action: data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = new_library;
