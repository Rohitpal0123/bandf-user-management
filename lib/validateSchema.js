const Validator = require("jsonschema").Validator;
const v = new Validator();

function validateSchema(body, schema) {
  try {
    const valid = v.validate(body, schema);
    const errorMessage = [];
    valid.errors.forEach((error) => {
      errorMessage.push(error.stack);
    });
    if (valid.errors.length != 0) throw errorMessage;
  } catch (error) {
    throw error;
  }
}

module.exports = validateSchema;
