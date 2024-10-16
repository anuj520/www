import mongoose from "mongoose";
  
const URI  = "mongodb+srv://erroreagle790:8057892261@cluster0.ijgid.mongodb.net/meanStack?retryWrites=true&w=majority&appName=Cluster0";

// const URI  = "mongodb://127.0.0.1:27017/meanStack"

const connectdbs = async() =>{
    try {
console.log("das connect");        
      await mongoose.connect(URI);
    } catch (error) {
     console.log("dbs connection failed");
     process.exit(0)   
    }
}
export {connectdbs}