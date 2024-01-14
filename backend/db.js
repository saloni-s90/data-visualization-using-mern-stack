import mongoose from "mongoose";

const Connection = () => {
    const URL = "mongodb://127.0.0.1:27017/industries";

    try{
        mongoose.connect(URL)
        console.log(`Database connected successfully `);
    }
    catch(error){
        console.log("Error while connecting with database ",error);
    }

}

export default Connection;