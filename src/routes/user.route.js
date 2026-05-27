import userController from '../controllers/user.controller.js'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.get("/all-users", userController.getAllUsers)

userRoutes.post("/new-user", userController.setNewUser)

userRoutes.patch("/update-user", userController.updateUser)

userRoutes.delete("/delete-user", userController.deleteUser)

export default userRoutes;