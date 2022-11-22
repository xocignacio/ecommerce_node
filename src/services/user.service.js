import PersistenceFactory from "../dao/factory.js";

class UserService {           ////////// capa intermedia de abstraccion
constructor() {
   this.userDao;
   this.init();
  
}
init = async () =>{
   const {users} = await PersistenceFactory.getPersistence();
   this.userDao = users;
}
 getUsers = async () => {
    return await this.userDao.getAll();
 }
 addUser = async (user) => {
    return await this.userDao.save(user);
 }
 
}

const userService = new UserService();

export default userService;