const express = require("express");
const router = express.Router();

const { getAllProjects, getAddProjectForm, addProject, deleteProject, getEditProjectForm, editProject } = require("./controller");

//provide the routes
router.get("/", getAllProjects);
router.get("/add", getAddProjectForm);
router.post("/add/submit", addProject);
router.get("/edit", getEditProjectForm);
router.post("/edit/submit", editProject);
router.get("/delete", deleteProject)

module.exports = router;