import { Router } from "express";
import colorsRoutes from "./colors.routes.js"

const router = Router()

router.use('/colores/', colorsRoutes)

export default router
