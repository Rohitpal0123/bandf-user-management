const axios = require("axios");

const axiosTrial = async (req, res) => {
  const savedUser = await axios({
    method: "get",
    url: "http://localhost:8000/role/getSpecificRole/6567a0c5ed3eab74e96ad3a7",
  });
  console.log("🚀 ~ savedUser:", savedUser.data);
};

const trial = axiosTrial();
console.log("🚀 ~ trial:", trial);
