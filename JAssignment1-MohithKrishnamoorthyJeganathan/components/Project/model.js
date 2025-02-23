const mongoose = require("mongoose");

const db = require("../../db"); //shared db stuff

//set up Schema and model
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technology: String,
  githubRepo: String,
  duration: String
}); 

const Project = mongoose.model("Project", ProjectSchema);

//MONGODB FUNCTIONS


//Get all projects from the projects collection
async function getProjects() {
  await db.connect();
  return await Project.find({}); //return array for find all
}

//Initialize projects collection with some initial data
async function initializeProjects() {
  const projectList = [
    {
        title: "School Database",
        description: "The application allows to manage Teachers, Students, and Courses via an API and displays data on specific pages.",
        technology: "C# Programming",
        githubRepo: "https://github.com/MohithJegan/Http-5125-Cumulative-1",
        duration: "3 months"
    },
    {
        title: "Abroad Compass",
        description: "This app provides country-specific seasonal clothing and food recommendations based on user-selected country and season.",
        technology: "JavaScript",
        githubRepo: "https://github.com/MohithJegan/abroad-compass-app",
        duration: "2 months"
    }
  ];
  await Project.insertMany(projectList);
}

//Add project to projects collection
async function addProject(project) {
  await db.connect();
  let newProject = new Project({
        title: project.title,
        description: project.description,
        technology: project.technology,
        githubRepo: project.githubRepo,
        duration: project.duration
  });
  
  let result = await newProject.save(); //save to the DB collection
  console.log(result);
}

//Get a specific project to projects collection by its Id
async function getSingleProject(id) {
  await db.connect();
  const editId = { _id: id };
  const result = await Project.findById(editId);
  return result;
}

//Update project in projects collection
async function updateProject(projectId, updatedProject) {
  await db.connect();
  let result = await Project.updateOne(
    { _id: projectId },
    { 
      title: updatedProject.title,
      description: updatedProject.description,
      technology: updatedProject.technology,
      githubRepo: updatedProject.githubRepo,
      duration: updatedProject.duration

     }
  );
}

//Delete prokject to projects collection
async function deleteProjectById(projectId) {
  await db.connect();
  let result = await Project.deleteOne({ _id: projectId });
}

//Export
module.exports = {
  getProjects,
  initializeProjects,
  addProject,
  getSingleProject,
  updateProject,
  deleteProjectById
}