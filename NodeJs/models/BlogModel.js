//Importamos conexion a la base de datos
import db from "../dataBase/db.js";
//Importamos el paquete de sequelize
import { DataTypes } from "sequelize";

//Definimos el modelo de la tabla
const BlogModel = db.define("blog", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

//Exportamos el modelo
export default BlogModel;
