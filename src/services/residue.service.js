import residueModel from '../models/residue.model.js';

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
            const newResidue = await residueModel.create(content);
            return newResidue;
        }
        catch (error) {
            console.error("Error: ", error);
            return "Something didn't happen as expected. Please, try again later."
        }
    }
}