const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Initialize express
const app = express();
app.use(express.json());

//Initialize cors
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

//Initialize cookie-parser
app.use(cookieParser());

//Initialize mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//Initialize routes
const customerRouter = require("./routes/customer");
const employeeRouter = require("./routes/employee");
const managerRouter = require("./routes/manager");

app.use("/customer", customerRouter);
app.use("/employee", employeeRouter);
app.use("/manager", managerRouter);
app.use("/", (req, res) => {
  res.send("Welcome to b&f User Management!");
});
//Initialize server
const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
