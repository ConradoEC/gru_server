import userModel from '../models/user.model.js';
import mongoose from 'mongoose';

export default class UserService {
    static async getAllUsers() {
        try {
            const allUsers = await userModel.find({});
            return allUsers;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async setNewUser(content) {
        try {
            const newUser = await userModel.create(content);
            return newUser;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async updateUser(id, content) {
        try {
            const updatedUser = await userModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id), content, { returnDocument: 'after' }, { runValidators: true }, { upsert: true });
            return updatedUser;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async deleteUser(id) {
        try {
            const deletedUser = await userModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
            return deletedUser;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }
}