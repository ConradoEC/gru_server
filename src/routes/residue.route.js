import residueController from '../controllers/residue.controller.js'
import { Router } from 'express'

const residueRoutes = Router()

residueRoutes.get("/all-residues", residueController.getAllResidues)

residueRoutes.get("/user-residues", residueController.getUserResidues)

residueRoutes.post("/new-residue", residueController.setNewResidue)

export default residueRoutes;