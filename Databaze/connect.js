const Mongoose = require("mongoose");
const URL = "mongodb://kuchar:hokuspokus@cluster0-shard-00-00.akqgm.mongodb.net:27017,cluster0-shard-00-01.akqgm.mongodb.net:27017,cluster0-shard-00-02.akqgm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-j19ers-shard-0&authSource=admin&retryWrites=true&w=majority";
const dotenv = require("dotenv");
dotenv.config();

class dbConnect{
    connect()
    {
        Mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        },(err)=>{
            if(err)
            {
                throw new Error("Nejde se připojit!");
            }
            console.log("Úspěšně připojeno!");
        })
    }
}

module.exports = new dbConnect();