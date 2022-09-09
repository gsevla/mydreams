import { Sequelize } from "sequelize";
import { initializeDreamModel } from "./Dream";

export function initializeModels(sequelize: Sequelize) {
  return {
    dream: initializeDreamModel(sequelize),
  };
}
