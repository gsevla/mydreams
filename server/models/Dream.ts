import { Model, DataTypes, Sequelize } from "sequelize";

export class Dream extends Model {}

export const initializeDreamModel = (sequelize: Sequelize) =>
  Dream.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dream: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      feeling: {
        type: DataTypes.ENUM,
        values: ["sad", "indifferent", "happy"],
        allowNull: false,
        validate: {
          isIn: {
            args: [["sad", "indifferent", "happy"]],
            msg: "You should use one of the following values: 'sad', 'indifferent', or 'happy' instead.",
          },
        },
      },
    },
    { sequelize }
  );
