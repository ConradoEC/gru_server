import residueModel from '../models/residue.model.js';
import mongoose from 'mongoose';

export default class ResidueService {
    static async getAllResidues() {
        try {
            const allResidues = await residueModel.find({});
            return allResidues;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async getUserResidues(id) {
        try {
            const userResidues = await residueModel.find({ id_user: new mongoose.Types.ObjectId(id) });
            return userResidues;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }

    static async setNewResidue(content) {
        try {
            const newResidue = await residueModel.create({
                id_user: new mongoose.Types.ObjectId(content.id_user),
                id_lixeira: new mongoose.Types.ObjectId(content.id_lixeira),
                tipo_residuo: content.tipo_residuo,
                data_residuo: content.data_residuo,
                dia_semana_residuo: content.dia_semana_residuo,
                horario_residuo: content.horario_residuo
            });
            return newResidue;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }
}