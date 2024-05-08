import express from "express"
import mangas from "../model/mangas.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const mangasList = await mangas.find()
    res.json(mangasList)
  } catch (error) {
    res.json({ message: error })
  }
})  

