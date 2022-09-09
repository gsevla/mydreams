import database from "./database";
import express from "express";
import { initializeControlllers } from "./controllers";

const port = 3000;

(async () => {
  try {
    await database.sequelize.sync();
    console.log("database successfully synced");

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    initializeControlllers(app);

    app.listen(port, () => {
      console.log("listening on port " + port);
    });
  } catch (error) {
    console.log("error", error);
  }
})();
