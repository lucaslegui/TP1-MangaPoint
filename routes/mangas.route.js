import express from "express";
import fs from "fs";
import auth from '../middleware/auth.middleware.js'
/* ?secretKey=campanitas */

const router = express.Router();


// traer todos los mangas
router.get("/", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        res.status(200).json(mangas);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// traer mangas por ID
router.get("/:id", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        const manga = mangas.find(p => p.id == req.params.id);
        if (!manga) {
            res.status(404).json({error: "Manga no encontrado"});
        } else {
            res.status(200).json(manga);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// crear manga

router.post("/", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        const manga = req.body;
        manga.id = mangas.length + 1;
        mangas.push(manga);
        await fs.promises.writeFile('./model/mangas.json', JSON.stringify(mangas));
        res.status(201).json(manga);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// actualizar manga
router.put("/:id", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        const manga = mangas.find(p => p.id == req.params.id);
        if (!manga) {
            res.status(404).json({error: "Manga no encontrado"});
        } else {
            const newManga = req.body;
            newManga.id = manga.id;
            const index = mangas.indexOf(manga);
            mangas[index] = newManga;
            await fs.promises.writeFile('./model/mangas.json', JSON.stringify(mangas));
            res.status(200).json(newManga);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//patchear manga
router.patch("/:id", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        const manga = mangas.find(p => p.id == req.params.id);
        if (!manga) {
            res.status(404).json({error: "Manga no encontrado"});
        } else {
            const updatedManga = req.body;
            for (let patch in updatedManga) {
                manga[patch] = updatedManga[patch];
            }
            await fs.promises.writeFile('./model/mangas.json', JSON.stringify(mangas));
            res.status(200).json(manga);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// borrar manga
router.delete("/:id", auth, async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        let mangas = JSON.parse(data);
        const manga = mangas.find(p => p.id == req.params.id);
        if (!manga) {
            res.status(404).json({error: "Manga no encontrado"});
        } else {
            mangas = mangas.filter(p => p.id != req.params.id);
            await fs.promises.writeFile('./model/mangas.json', JSON.stringify(mangas));
            res.status(200).json(manga);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


export default router;