import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

const userController = new UserController();

routes.get("/", userController.list);
routes.get("/:name", userController.choices);

export { routes };
