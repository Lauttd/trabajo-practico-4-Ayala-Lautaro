import sequelize from "./src/config/database.js";

const initDB = async () => {
    try {
  await sequelize.authenticate();
  console.log('Conexion a mysql establecida.');
  await sequelize.sync({force:true});
} catch (error) {
  console.error('error al conectar a la base de datos:', error);
}
}
export default initDB;