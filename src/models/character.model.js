import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

//-------------------------------------------------------------------------------------------------------------------//
// validando los personajes
const personajesDb = sequelize.define("personajesDb", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  ki: { type: DataTypes.STRING, allowNull: false },
  race: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

//-------------------------------------------------------------------------------------------------------------------//
export default personajesDb;
