const express = require("express");
const authController = require("../controllers/authController");
const transactionController = require("../controllers/transactionController");

const router = express.Router();

router.get("/", authController.protect, transactionController.getTransactions);

router.post(
  "/",
  authController.protect,
  transactionController.createTransaction
);

module.exports = router;
