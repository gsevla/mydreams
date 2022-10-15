import express, { Express } from "express";
import dreamController from "./dream";
import userController from "./user";

export function initializeControlllers(app: Express) {
  const router = express.Router();

  dreamController(router);
  userController(router);

  app.use("/api", router);
}
