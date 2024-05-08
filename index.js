import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import mangasRoute from "./routes/mangas.routes.js";
import adaptationsRoute from "./routes/adaptations.routes.js"

const PORT = process.env.PORT || 3002;
const app = express();

//conexion a la base de datos
mongoose
  .connect("mongodb://127.0.0.1:27017/mangapoint")
  .then(() => console.log("conectado a MongoDB..."))
  .catch((err) => console.error("no se pudo conectar..."));

app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mostrar el inicio
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./views" });
});

//routers
app.use("/mangas", mangasRoute);
app.use("/adaptations", adaptationsRoute);

app.listen(PORT);
