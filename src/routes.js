const { Router } = require("express");

//const UserController = require("./app/controllers/UserController");
//const SessionController = require("./app/controllers/SessionController");
//const authMiddleware = require("./app/middlewares/auth");

const ToPlayController = require("./app/controllers/ToPlayController");

const routes = new Router();

//routes.post("/users", UserController.store);
//routes.post("/sessions", SessionController.store);

//routes.use(authMiddleware);

//routes.put("/users", UserController.update);

routes.get("/play", ToPlayController.index);
routes.post("/create", ToPlayController.store);

module.exports = routes;
