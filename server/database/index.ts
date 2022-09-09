import path from "path";
import { Sequelize } from "sequelize";
import { initializeModels } from "../models";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite"),
});

export default {
  sequelize,
  models: initializeModels(sequelize),
};
