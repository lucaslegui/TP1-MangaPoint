import express from "express";
import {promises} from "fs";

const router = express.Router();

// traer todos los mangas

router.get("/", (req, res) => {
    promises.readFile('./model/mangas.json')
        .then(data => {
            const mangas = JSON.parse(data);
            res.status(200).json(mangas);
        })
        .catch(error => {
            res.status(500).json({error: error.message});
        })
});

// buscar por ID

router.get("/:id", (req, res) => {
    promises.readFile('./model/mangas.json')
        .then(data => {
            const mangas = JSON.parse(data);
            const manga = mangas.find(manga => manga.id === parseInt(req.params.id));

            res.status(200).json(manga);
        })
        .catch(error => {
            res.status(500).json({error: error.message});
        })
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