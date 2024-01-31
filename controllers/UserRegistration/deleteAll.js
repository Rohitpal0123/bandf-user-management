const UserRegistration = require("../../models/userRegistration.model");

const RESPONSE_MESSAGE = require("../../lib/responseCode");
class deleteALl {
  process = async (req, res) => {
    try {
      const deletedUser = await UserRegistration.deleteMany({});

      res.status(200).send({
        type: RESPONSE_MESSAGE.SUCCESS,
        data: "Users deleted",
      });
    } catch (error) {
      console.log("🚀 ~ deleteALl ~ process= ~ error:", error);
      res.status(400).send({
        type: RESPONSE_MESSAGE.FAILED,
        error: error.message,
      });
    }
  };
}

module.exports = new deleteALl();
