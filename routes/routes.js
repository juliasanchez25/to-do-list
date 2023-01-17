const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/tasks", TaskController.getTasks);
routes.get("/getById/:id", TaskController.getById);
routes.post("/create", TaskController.createTask);
routes.post("/update/:id", TaskController.updateTask);
routes.get("/delete/:id", TaskController.deleteTask);

module.exports = routes;
