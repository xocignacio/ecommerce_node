import mongoose from "mongoose";

export default class MongoClient {
    constructor() {
        this.connection = mongoose.connect('mongodb+srv://xocignaciodb:mongoatlasdb@cluster0.qe9tcs1.mongodb.net/?retryWrites=true&w=majority', (error)=>{
            console.log("Conectado a mongo");
        })

    }
    static getInstance = () =>{
        if(!this.instance) {
            this.instance = new MongoClient();
        }
        else{
            return this.instance
        }
    }
}

