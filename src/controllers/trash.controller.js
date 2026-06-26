import trashService from '../services/trash.service.js';

class TrashController {
    static async getAllTrashes(req, res) {
        res.status(200).json(await trashService.getAllTrashes())
    }

    static async getAllUserTrashes(req, res) {
        res.status(200).json(await trashService.getAllUserTrashes(req.query.id))
    }
    
    static async setNewTrash(req, res) {
        // consowle.log(JSON.parse(JSON.stringify(req.body)))

        res.status(200).json(await trashService.setNewTrash(JSON.parse(JSON.stringify(req.body))))
    }

    static async updateTrash(req, res) {
        res.status(200).json(await trashService.updateTrash(req.query.id, req.body))
    }
}

export default TrashController