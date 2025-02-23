const projectModel = require("./model");

//Get all projects
const getAllProjects = async (request, response) => {
  let projectList = await projectModel.getProjects();
  //if there's nothing in the projects collection, initialize with some content then get the projects again
  if (!projectList.length) {
    await projectModel.initializeProjects(); 
    projectList = await projectModel.getProjects();
  }
  response.render("project/project-list", { projects: projectList });
};

//Renders the Add project form
const getAddProjectForm = async (request, response) => {
  let userprojects = await projectModel.getProjects();
  response.render("project/project-add", { title: "Add user project", projects: userprojects });
}

//Get the new project from user and pass it for add operation
const addProject = async(request, response) => {
  let newProject = {
    title: request.body.title,
    description: request.body.description,
    technology: request.body.technology,
    githubRepo: request.body.githubRepo,
    duration: request.body.duration,
  };
  await projectModel.addProject(newProject);
  response.redirect("/admin/project");
}

//Renders the Edit project form
const getEditProjectForm = async (request, response) => {
  if (request.query.projectId) {
    let projectList = await projectModel.getProjects();
    let projectToEdit = await projectModel.getSingleProject(request.query.projectId);
    response.render("project/project-edit", {
      title: "Edit user project",
      project: projectList,
      editProject: projectToEdit,
    });
  } else {
    response.redirect("/admin/project");
  }
  
}

//Get the edited project from user and pass it for edit operation
const editProject = async(request, response) => {
  let updatedProject = {
    title: request.body.title,
    description: request.body.description,
    technology: request.body.technology,
    githubRepo: request.body.githubRepo,
    duration: request.body.duration,
  };
  await projectModel.updateProject(request.body.projectId, updatedProject);
  response.redirect("/admin/project");
}

//Get the Id for project and pass it foe delete operation
const deleteProject = async(request, response) => {
  await projectModel.deleteProjectById(request.query.projectId);
  response.redirect("/admin/project");
}


//Export
module.exports = {
  getAllProjects,
  getAddProjectForm,
  addProject,
  getEditProjectForm,
  editProject,
  deleteProject
};