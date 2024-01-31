const jwt = require("jsonwebtoken");
const UserRegistration = require("../models/userRegistration.model");
const Role = require("../models/role.model");
const axios = require("axios");

const authenticateUser = async (req, res, next) => {
  let token;

  try {
    if (req.cookies?.jwt) {
      // Get token from header
      token = req.cookies?.jwt;
      console.log("🚀 ~ token:", token);

      // Verify token
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("🚀 ~ decoded:", decoded);

      // Get user from the token
      let isUser = await UserRegistration.findOne({ _id: decoded.id });
      console.log("🚀 ~ isUser:", isUser);
      if (!isUser) {
        throw "Not authorized";
      }
      req.isUser = isUser;
      req.decoded = decoded;
    } else {
      throw "Not authorized !";
    }
    next();
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(400).json(error);
  }
};

const authenticateManager = async (req, res, next) => {
  try {
    // const managerRole = await Role.findOne({ role: "manager" });
    const managerExists = await axios({
      method: "get",
      url: `http://localhost:8000/role/getSpecificRole/${req.decoded.role}`,
    });

    if (req.isUser && req.isUser.role.equals(managerExists.data.data._id)) {
      next();
    } else {
      res.status(401);
      throw "Manager authorization required !";
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(500).send(error);
  }
};

const authenticateEmployee = async (req, res, next) => {
  try {
    // const employeeRole = await Role.findOne({ role: "employee" });
    const employeeExists = await axios({
      method: "get",
      url: `http://localhost:8000/role/getSpecificRole/${req.decoded.role}`,
    });

    if (req.isUser && req.isUser.role.equals(employeeExists.data.data._id)) {
      next();
    } else {
      res.status(401);
      throw "Employee authorization required !";
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  authenticateUser,
  authenticateManager,
  authenticateEmployee,
};
