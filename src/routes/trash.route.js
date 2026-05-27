import trashController from '../controllers/trash.controller.js'
import { Router } from 'express'

const trashRoutes = Router()

trashRoutes.get("/all-trashes", trashController.getAllTrashes)

trashRoutes.get("/those-trashes", trashController.getAllUserTrashes)

trashRoutes.post("/new-trash", trashController.setNewTrash)

trashRoutes.patch("/update-trash", trashController.updateTrash)

export default trashRoutes;