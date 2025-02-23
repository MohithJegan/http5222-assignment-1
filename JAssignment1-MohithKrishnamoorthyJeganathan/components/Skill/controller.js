const skillModel = require("./model");

//Get all skills
const getAllSkills = async (request, response) => {
  let skillList = await skillModel.getSkills();
  //if there's nothing in the skills collection, initialize with some content then get the skills again
  if (!skillList.length) {
    await skillModel.initializeSkills(); 
    skillList = await skillModel.getSkills();
  }
  response.render("skill/skill-list", { skills: skillList });
};

//Renders the Add skill form
const getAddSkillForm = async (request, response) => {

  let userskills = await skillModel.getSkills();
  response.render("skill/skill-add", { title: "Add user skill", skills: userskills });
}

//Get the new skill from user and pass it for add operation
const addSkill = async(request, response) => {
  let newSkill = {
    category: request.body.category,
  proficiencyLevel: request.body.proficiencyLevel,
  yearsOfExperience:request.body.yearsOfExperience,
  name: request.body.name,
  certification: request.body.certification,
  };
  await skillModel.addSkill(newSkill);
  response.redirect("/admin/skill");
}

//Renders the Edit skill form
const getEditSkillForm = async (request, response) => {
  if (request.query.skillId) {
    let skillList = await skillModel.getSkills();
    let skillToEdit = await skillModel.getSingleSkill(request.query.skillId);
    response.render("skill/skill-edit", {
      title: "Edit user skill",
      skill: skillList,
      editSkill: skillToEdit,
    });
  } else {
    response.redirect("/admin/skill");
  }
  
}

//Get the edited skill from user and pass it for edit operation
const editSkill = async(request, response) => {
  let updatedSkill = {
    category: request.body.category,
  proficiencyLevel: request.body.proficiencyLevel,
  yearsOfExperience:request.body.yearsOfExperience,
  name: request.body.name,
  certification: request.body.certification,
  };
  await skillModel.updateSkill(request.body.skillId, updatedSkill);
  response.redirect("/admin/skill");
}

//Get the Id for skill and pass it for delete operation
const deleteSkill = async(request, response) => {
  await skillModel.deleteSkillById(request.query.skillId);
  response.redirect("/admin/skill");
}


//Export
module.exports = {
  getAllSkills,
  getAddSkillForm,
  addSkill,
  getEditSkillForm,
  editSkill,
  deleteSkill
};