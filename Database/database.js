import mongoose from "mongoose";
import Exception from "../exceptions/Exception.js";
import {print,OuputType} from "../Helper/print.js"
mongoose.set('strictQuery', true)
async function connect() {
    try{
        let connection = await mongoose.connect(process.env.CONNECTION_URL);
       // console.log("");
        print("connection success mongoose",OuputType.SUCCESS);
        return connection
    }catch (error) {
        debugger         
        const {code} = error
        if(code == 8000) {  
            throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
        }else if(code =='ENOTFOUND')
        {
            throw new Exception(Exception.WRONG_CONNECTION_STRING);
        }
        throw new Exception(Exception.CANNOT_CONNECT_MONGODB)
    }
}
export default connect
