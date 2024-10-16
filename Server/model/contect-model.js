import { Schema,model } from "mongoose";

const contectSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }

})
const Contect = new model("Contect",contectSchema)
export{Contect}