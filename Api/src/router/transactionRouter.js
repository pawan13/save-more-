const express = require("express");
const router = express.Router();

const transactionController = require("../controller/transactionController");

router.get("/", transactionController.getAlltransactions);
router.post("/", transactionController.createTransaction);
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
