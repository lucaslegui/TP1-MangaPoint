import express from "express";
import fs from "fs";
// import auth from '../middleware/auth.middleware.js
/* ?secretKey=campanitas */

const router = express.Router();

//traer mangas por titulo ordenado

router.get("/:title?", async (req, res) => {
    try {
        const { title } = req.params;
        const data = await fs.promises.readFile('./model/mangas.json');
        let mangas = JSON.parse(data);

        if (title) {
            mangas = mangas.filter(manga => manga.title.toLowerCase().includes(title.toLowerCase()));
        }

        mangas.sort((a, b) => a.title.localeCompare(b.title));

        res.status(200).json(mangas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//para los nombres compuestos desde URL se usa como separador de espacios %20, ej: http://localhost:3000/title/dragon%20ball


export default router;