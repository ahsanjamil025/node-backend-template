const { deletLibrary } = require("../../services/library");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const delete_library = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await deletLibrary(req.params.id);

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
      message: "Library Deleted Successfully!",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = delete_library;
