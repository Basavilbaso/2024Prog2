const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/register", usersController.showregister);
router.get("/login", usersController.showlogin);
router.post("/register", usersController.register);

module.exports = router;