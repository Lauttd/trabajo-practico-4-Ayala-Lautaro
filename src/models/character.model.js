import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


// validando los personajes
const personajesDb = sequelize.define("personajesDb", {
    id: { type: DataTypes.STRING, autoIncrement:true,primaryKey:true },
    name: { type: DataTypes.STRING, allownull: false },
    ki: { type: DataTypes.STRING, allownull: false },
    race: { type: DataTypes.STRING, allownull: false },
    gender: { type: DataTypes.STRING, allownull: false },
    description: { type: DataTypes.STRING, allownull: false },
});

export default personajesDb;