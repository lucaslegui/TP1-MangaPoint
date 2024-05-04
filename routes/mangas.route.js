import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        res.status(200).json(mangas);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:id", async (req, res) => {
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


router.post("/", (req, res) => {
    res.send({data: "mangasRoute"});
});

router.put("/", (req, res) => {
    res.send({data: "mangasRoute"});
});

router.delete("/", (req, res) => {
    res.send({data: "mangasRoute"});
});

export default router;