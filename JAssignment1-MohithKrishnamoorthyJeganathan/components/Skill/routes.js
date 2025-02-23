const express = require("express");
const router = express.Router();

const {  getAllSkills, getAddSkillForm, addSkill, getEditSkillForm, editSkill, deleteSkill } = require("./controller");

//provide the routes
router.get("/", getAllSkills);
router.get("/add", getAddSkillForm);
router.post("/add/submit", addSkill);
router.get("/edit", getEditSkillForm);
router.post("/edit/submit", editSkill);
router.get("/delete", deleteSkill)

module.exports = router;