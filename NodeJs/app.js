import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import db from "./dataBase/db.js";

const app = express();

//Configuramos el puerto
const PORT = process.env.PORT || 3000;

//Configuramos el middleware
app.use(cors());

//Configuramos el middleware para poder leer los datos que vienen en formato json
app.use(express.json());

//Configuramos las rutas
app.use(routes);

//Configuramos la conexion a la base de datos
db.sync()
  .then(() => {
    console.log("Base de datos conectada de forma exitosa!!!");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
