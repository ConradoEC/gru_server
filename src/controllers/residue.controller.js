import residueService from '../services/residue.service.js';

export default class ResidueController {
    static async getAllResidues(req, res) {
        res.status(200).json(await residueService.getAllResidues());
    }

    static async getUserResidues(req, res) {
        res.status(200).json(await residueService.getUserResidues(req.query.id));
    }

    static async setNewResidue(req, res) {
        res.status(200).json(await residueService.setNewResidue(req.body));
    }
}