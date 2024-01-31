const UserRegistration = require("../../models/userRegistration.model");
const RESPONSE_MESSAGE = require("../../lib/responseCode");

class getAllUser {
  process = async (req, res) => {
    try {
      const users = await UserRegistration.find();
      if (!users) throw "Users not found !";

      res.status(200).send({
        type: RESPONSE_MESSAGE.SUCCESS,
        data: users,
      });
    } catch (error) {
      console.log("🚀 ~ getAllUser ~ process= ~ error:", error);
      res.status(400).send({
        type: RESPONSE_MESSAGE.FAILED,
        error: error.message,
      });
    }
  };
}

module.exports = new getAllUser();
