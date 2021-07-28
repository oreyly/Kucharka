const Mongoose = require("mongoose");
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