const mongoose = require("mongoose");

const db = require("../../db"); //shared db stuff

//set up Schema and model
const SkillSchema = new mongoose.Schema({
  category: String,
  proficiencyLevel: String,
  yearsOfExperience: Number,
  name: String,
  certification: Number,
});

const Skill = mongoose.model("Skill", SkillSchema);

//MONGODB FUNCTIONS

//Get all pets from the skills collection
async function getSkills() {
  await db.connect();
  return await Skill.find({}); //return array for find all
}

//Initialize skills collection with some initial data
async function initializeSkills() {
  const skillList = [
    {
      category: "Frontend Development",
      proficiencyLevel: "Intermediate",
      yearsOfExperience: 1,
      name: "HTML",
      certification: 1,
    },
    {
      category: "Frontend Development",
      proficiencyLevel: "Intermediate",
      yearsOfExperience: 1,
      name: "CSS",
      certification: 0,
    },
    {
      category: "Programming",
      proficiencyLevel: "Intermediate",
      yearsOfExperience: 2,
      name: "JS",
      certification: 2,
    },
    {
      category: "Programming",
      proficiencyLevel: "Intermediate",
      yearsOfExperience: 1,
      name: "C#",
      certification: 0,
    },
  ];
  await Skill.insertMany(skillList);
}

//Add skill to skills collection
async function addSkill(skill) {
  await db.connect();
  let newSkill = new Skill({
    category: skill.category,
    proficiencyLevel: skill.proficiencyLevel,
    yearsOfExperience: skill.yearsOfExperience,
    name: skill.name,
    certification: skill.certification,
  });

  let result = await newSkill.save(); //save to the DB collection
  console.log(result);
}

//Get a specific skill to skills collection by its Id
async function getSingleSkill(id) {
  await db.connect();
  const editId = { _id: id };
  const result = await Skill.findById(editId);
  return result;
}

//Update skill in skills collection
async function updateSkill(skillId, updatedSkill) {
  await db.connect();
  let result = await Skill.updateOne(
    { _id: skillId },
    {
      category: updatedSkill.category,
      proficiencyLevel: updatedSkill.proficiencyLevel,
      yearsOfExperience: updatedSkill.yearsOfExperience,
      name: updatedSkill.name,
      certification: updatedSkill.certification,
    }
  );
}

//Delete skill to skills collection
async function deleteSkillById(skillId) {
  await db.connect();
  let result = await Skill.deleteOne({ _id: skillId });
}

//Export
module.exports = {
  getSkills,
  initializeSkills,
  addSkill,
  getSingleSkill,
  updateSkill,
  deleteSkillById,
};
