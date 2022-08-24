const { library_detail } = require("../../DAL/library");
const { libraryDetail } = require("../../services/library");
const { RENDER_BAD_REQUEST } = require("../../utils/utils");

const library_details = async (req, res) => {
  try {
    const { error, auth, error_message, data } = await libraryDetail(req.params.id);

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
      message: "Library",
      data
      
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = library_details;
