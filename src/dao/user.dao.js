export default class usersDaoArray {
    constructor(){
        this.users = [];
    }
    getAll = async () => {
        return this.users;
    }
    save = async(user) => {
        if(this.users.length===0) user.id=1;
        else user.id = this.users [this.user-1].id+1;
        this.users.push(user)
        return user;
        
    }
}