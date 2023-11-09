const express = require("express");
const cors = require("express-cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = require("./src/config/mongodb");
const userRouter = require("./src/router/userRouter");
const transactionRouter = require("./src/router/transactionRouter");

const PORT = 3000;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", transactionRouter);

app.get("/health", (req, res) => {
  res.json({ status: "checking health" });
});

connectDB().then(() => {
  console.log(`Db is connected successfully`);
  app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
  });
});
