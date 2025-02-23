##  Components

Each component **Project** and **Skill** follows an **MVC (Model-View-Controller)** pattern.

###  **Project Component**
- **`model.js`** – Defines the Project schema and database interactions.
- **`controller.js`** – Handles logic for retrieving, adding, updating, and deleting projects.
- **`routes.js`** – Defines project-related actions.

### **Skill Component**
- **`model.js`** – Defines the Skill schema and database interactions.
- **`controller.js`** – Handles business logic for retrieving, adding, updating, and deleting skills.
- **`routes.js`** – Defines skill-related actions.

##  Routes

The **routes.js** files define RESTful routes for handling CRUD operations.

### **Project Routes (`/components/Project/routes.js`)**
GET    `/admin/project`        - Fetch all projects  
GET    `/admin/project/add`    - Show form to add a new project  
POST   `/admin/project/add`    - Add a new project  
GET    `/admin/project/edit`   - Show form to edit a project  
POST   `/admin/project/edit`   - Update an existing project  
GET    `/admin/project/delete` - Delete a project  

### **Skill Routes (`/components/Skill/routes.js`)**
GET    `/admin/skill`         - Fetch all skills  
GET    `/admin/skill/add`     - Show form to add a new skill  
POST   `/admin/skill/add`     - Add a new skill  
GET    `/admin/skill/edit`    - Show form to edit a skill  
POST   `/admin/skill/edit`    - Update an existing skill  
GET    `/admin/skill/delete`  - Delete a skill  

## Views (Pug Templates)

### **Common Layout**
- **`layout.pug`** – Defines the base layout (navbar, footer, and page structure).
- **`index.pug`** – Homepage displaying an overview of the portfolio.

### **Skill Views**
- **`skill-list.pug`** – Displays all skills.
- **`skill-add.pug`** – Form to add a new skill.
- **`skill-edit.pug`** – Form to edit an existing skill.

##  Deployment URL
https://http5222-assignment-1-1.onrender.com
### **Project Views**
- **`project-list.pug`** – Displays all projects.
- **`project-add.pug`** – Form to add a new project.
- **`project-edit.pug`** – Form to edit an existing project.
