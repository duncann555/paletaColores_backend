import { Router } from "express";
import { crearColor, listarColor, obtenerColorID, borrarColorID, editarColorID } from "../controllers/colors.controllers.js"


const router = Router();

router.route("/").post(crearColor).get(listarColor)
router.route('/:id').get(obtenerColorID).delete(borrarColorID).put(editarColorID)

export default router;
