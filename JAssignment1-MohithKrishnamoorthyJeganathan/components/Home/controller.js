const projectModel = require("../Project/model");
const skillModel = require("../Skill/model");

//Render the home page
const getHomePage = async (request, response) => {
  response.render("index");
};

//Render the contact page
const getContactPage = async (request, response) => {
  response.render("contact");
};

const getProjects = async (request, response) => {
  let projectList = await projectModel.getProjects();
  //if there's nothing in the projects collection, initialize with some content then get the projects again
  if (!projectList.length) {
    const projectData = await projectModel.initializeProjects();
    // response.json(projectData);
    projectList = await projectModel.getProjects();
  }
  response.json(projectList);
};

const getSkills = async (request, response) => {
  let skillList = await skillModel.getSkills();
  //if there's nothing in the skills collection, initialize with some content then get the skills again
  if (!skillList.length) {
    await skillModel.initializeSkills();
    skillList = await skillModel.getSkills();
  }
  response.json(skillList);
};

//Export
module.exports = {
  getHomePage,
  getContactPage,
  getProjects,
  getSkills,
};
