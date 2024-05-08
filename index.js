import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
// import mangasRoute from "./routes/mangas.route.js";
// import titleRoute from "./routes/title.route.js";
// import genreRoute from "./routes/genre.route.js";

const PORT = process.env.PORT || 3002
const app = express();

//conexion a la base de datos
mongoose
.connect("mongodb://localhost:27017/mangapoint")
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
// app.use("/mangas", mangasRoute);
// app.use("/title", titleRoute);
// app.use("/genre", genreRoute);

app.listen(PORT);
