import express, { Express } from "express";
import dreamController from "./dream";

export function initializeControlllers(app: Express) {
  const router = express.Router();

  dreamController(router);

  app.use("/api", router);
}
