const Customer = require("../../models/customer.model");
const axios = require("axios");

class registerCustomer {
  process = async (req, res) => {
    try {
      const { name, email } = req.body;

      const coins = 0;
      const newCustomer = await Customer.create({
        name,
        email,
        coins,
      });

      const saveCustomerInMainDB = axios({
        method: "post",
        url: "http://localhost:8000/customer/register",
        data: newCustomer,
      });

      res.status(200).json(newCustomer);
    } catch (error) {
      console.log("🚀 ~ error:", error);
      res.status(400).json(error);
    }
  };
}

module.exports = new registerCustomer();
