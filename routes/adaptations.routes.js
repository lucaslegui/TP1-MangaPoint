import express from "express";
import {
  getAdaptations,
  getAdaptationById,
  createAdaptation,
  updateAdaptation,
  deleteAdaptation
} from "../controllers/adaptations.controller.js";
import auth from "../middleware/auth.middleware.js"
/* ?secretKey=GoingMerry */

const router = express.Router();

//get todos 🔒
router.get("/", auth, async (req, res) => {
  try {
    const adaptationsList = await getAdaptations();
    res.json(adaptationsList);
  } catch (error) {
    res.json({ message: error });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const adaptation = await getAdaptationById(req.params.id);
    res.json(adaptation);
  } catch (error) {
    res.json({ message: error });
  }
});

//post crear adaptacion 🔒
router.post("/", auth, async (req, res) => {
  try {
    const adaptation = await createAdaptation(req);
    res.json(adaptation);
  } catch (error) {
    res.json({ message: error });
  }
});

//put actualizar adaptacion
router.put("/:id", async (req, res) => {
  try {
    const adaptation = await updateAdaptation(req.params.id, req.body);
    res.json(adaptation);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete by id (desactivar)🔒
router.delete("/:id", auth, async (req, res) => {
  try {
    const adaptation = await deleteAdaptation(req.params.id);
    res.json(adaptation);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
