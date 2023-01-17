const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/tasks", TaskController.getTasks);
routes.get("/getById", TaskController.getById);
routes.post("/create", TaskController.createTask);

module.exports = routes;
