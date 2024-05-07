import express from "express";
import mangasRoute from "./routes/mangas.route.js";
import titleRoute from "./routes/title.route.js";
import genreRoute from "./routes/genre.route.js";

const app = express();

app.use(express.static("views"));

//mostrar el inicio
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./views" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/mangas", mangasRoute);
app.use("/title", titleRoute);
app.use("/genre", genreRoute);

app.listen(3000, () => {
  console.log("server is corriendo at 3000 puerto 🤠...");
});
