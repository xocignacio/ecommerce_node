import config from '../config/config.js';
import MongoClient from './mongoClient.js';
const PERSISTENCE = config.app.PERSISTENCE;
export default class PersistenceFactory {
    static getPersistence = async() => {
        switch (PERSISTENCE) {
            case "MEMORY":
                let {default:UserDaoMemory} = await import ('./user.dao.js')
                return {
                    users: new UserDaoMemory()
                }
            case "FILESYSTEM":
                let {default:UserDaoFile} = await import ('./usersFile.dao')
                return {
                    users: new UserDaoFile()
                }
            case "MONGUITO":
                const connection = MongoClient.getInstance();
                let {default:UserDaoMongo} = await import ('./usersMongo.dao.js');
                return {
                    users: new UserDaoMongo()
                }      
            }

    }
}
