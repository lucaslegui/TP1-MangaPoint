import express from "express";
import fs from "fs";
// import auth from '../middleware/auth.middleware.js'
/* ?secretKey=campanitas */

const router = express.Router();

// traer mangas por genero
router.get("/:genre", async (req, res) => {
    try {
        const data = await fs.promises.readFile('./model/mangas.json');
        const mangas = JSON.parse(data);
        const filteredMangas = mangas.filter(m => m.genre.toLowerCase().includes(req.params.genre.toLowerCase()));
        if (filteredMangas.length > 0) {
            res.status(200).json(filteredMangas);
        } else {
            res.status(404).json({error: "No se encontraron mangas para el género proporcionado"});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default router;