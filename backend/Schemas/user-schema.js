import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    end_year: "String",
    intensity : "String",
    sector:"String", 
    topic : "String",
    insight : "String",
    url : "String",
    region : "String",
    start_year : "String",
    impact : "String",
    added: "String",
    published : "String",
    country : "String",
    relevance : "String",
    pestle : "String",
    source : "String",
    title : "String",
    likelihood : "String"

})

const reportModel = mongoose.model("informations",userSchema)

export default reportModel
