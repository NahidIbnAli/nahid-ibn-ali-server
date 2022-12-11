const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const projects = require("./data/projects.json");

app.get("/", (req, res) => {
  res.send("Nahid Ibn Ali server is running");
});

app.get("/projects/:link", (req, res) => {
  const link = req.params.link;
  const selectedProject = projects.find((project) => project.link === link);
  res.send(selectedProject);
});

app.listen(port, () => console.log("server is running on port", port));
