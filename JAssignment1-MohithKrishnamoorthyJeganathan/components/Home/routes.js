const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getContactPage,
  getProjects,
  getSkills,
} = require("./controller");

// provide the routes
router.get("/", getHomePage);
router.get("/contact", getContactPage);
router.get("/api/projects", getProjects);
router.get("/api/skills", getSkills);

module.exports = router;
