module.exports = {
  type: "object",
  additionalProperties: false,
  properties: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  required: ["firstName", "lastName", "userName", "email", "password", "role"],
};
