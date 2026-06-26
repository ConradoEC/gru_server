import trashModel from "../models/trash.model.js";
import mongoose from "mongoose";

export default class TrashService {
    static async getAllTrashes() {
        try {
            const allTrashes = await trashModel.find({});
            return allTrashes;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async getAllUserTrashes(id) {
        try {
            const allUserTrashes = await trashModel.find({ codigo_dono_lixeira: new mongoose.Types.ObjectId(id) });
            return allUserTrashes;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async setNewTrash(content) {
        try {
            console.log(content)

            const newTrash = await trashModel.create({
                codigo_dono_lixeira: new mongoose.Types.ObjectId(content.codigo_dono_lixeira),
                endereco_lixeira: content.endereco_lixeira,
                coordenada: content.coordenada,
                status_lixeira: parseInt(content.status_lixeira)
            });
            return newTrash;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async updateTrash(id, content) {
        try {
            const updatedTrash = await trashModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id), content, { returnDocument: 'after' }, { runValidators: true }, { upsert: true });
            return updatedTrash;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }
}