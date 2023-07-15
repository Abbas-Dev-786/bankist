const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/me", authController.protect, userController.ME);

router.patch("/updateMe", authController.protect, userController.updateME);

router.delete("/deleteMe", authController.protect, userController.deleteME);

module.exports = router;
