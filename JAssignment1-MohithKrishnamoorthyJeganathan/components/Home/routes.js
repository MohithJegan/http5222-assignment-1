const express = require("express");
const router = express.Router();

const { getHomePage, getContactPage } = require("./controller");

// provide the routes
router.get("/", getHomePage);
router.get("/contact", getContactPage);


module.exports = router;