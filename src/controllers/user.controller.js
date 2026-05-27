import userService from '../services/user.service.js'

export default class UserController {
    static async getAllUsers(req, res) {
        res.status(200).json(await userService.getAllUsers());
    }

    static async setNewUser(req, res) {
        res.status(200).json(await userService.setNewUser(req.body));
    }

    static async updateUser(req, res) {
        res.status(200).json(await userService.updateUser(req.query.id, req.body));
    }

    static async deleteUser(req, res) {
        res.status(200).json(await userService.deleteUser(req.query.id));
    }
}