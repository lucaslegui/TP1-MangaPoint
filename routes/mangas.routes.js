import express from "express";
import {
  getMangas,
  createManga,
  updateManga,
  getManga,
  getMangaByGenre,
  getFinishedMangas,
  deleteManga
} from "../controllers/mangas.controller.js";
import auth from "../middleware/auth.middleware.js"
/* ?secretKey = GoingMerry */

const router = express.Router();

//get todos 🔒
router.get("/", auth, async (req, res) => {
  try {
    const mangasList = await getMangas();
    res.json(mangasList);
  } catch (error) {
    res.json({ message: error });
  }
});

//get by title (ordenado)
router.get("/title/:title?", async (req, res) => {
  try {
    let mangaList;
    if (req.params.title) {
      mangaList = await getManga(req.params.title);
    } else {
      mangaList = await getMangas();
      mangaList.sort((a, b) => a.title.localeCompare(b.title));
    }
    res.json(mangaList);
  } catch (error) {
    res.json({ message: error });
  }
});

//get by genre
router.get("/genre/:genre", async (req, res) => {
  try {
    const mangaList = await getMangaByGenre(req.params.genre);
    res.json(mangaList);
  } catch (error) {
    res.json({ message: error });
  }
});

//get by finished mangas
router.get("/:finished", async (req, res) => {
  try {
    const mangaList = await getFinishedMangas();
    res.json(mangaList);
  } catch (error) {
    res.json({ message: error });
  }
});

//post crear manga 🔒
router.post("/", auth, async (req, res) => {
  try {
    const manga = await createManga(req.body);
    res.json(manga);
  } catch (error) {
    res.json({ message: error });
  }
});

//actualizar por titulo
router.put("/:title", async (req, res) => {
  try {
    const manga = await updateManga(req.params.title, body);
    res.json(manga);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete manga by id 🔒
router.delete("/:id", auth, async (req, res) => {
  try {
    const manga = await deleteManga(req.params.id);
    res.json(manga);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;