import mongoose from 'mongoose';
import userModel from '../../models/Users.js'

export default class UserMongoDao {
    constructor() {
        this.model = mongoose.model(userModel.collection,userModel.schema);
    }

    getAll = async () => {
        let result = await this.model.find();
        return result;
    }
    save = async (user) => {
         let result = await this.model.create(user);
         return result;
    }
}