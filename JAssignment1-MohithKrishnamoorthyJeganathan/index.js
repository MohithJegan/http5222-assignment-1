const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const sessions = require("express-session");
const cors = require("cors");

const dotenv = require("dotenv");

//load the environment variables from .env
dotenv.config();

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));


//USE PAGE ROUTES FROM ROUTER(S)
app.use("/", require("./components/Home/routes"));
app.use("/admin/project", require("./components/Project/routes"));
app.use("/admin/skill", require("./components/Skill/routes"));


//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
}); 

