const mongoose = require("mongoose");
import  bcryptjs from "bcryptjs"
import JWT from "jsonwebtoken"
// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
//? secue password with the bcrypt
userSchema.pre('save', async function(next){
    const user = this
    
    if(!user.isModified('password')){
        next()
    }
    try {
        const saltRound = await bcryptjs.genSalt(10);
        const hash_password = await bcryptjs.hash(user.password,saltRound);
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

//json web token

userSchema.methods.genratedToken = async function(){
try {
   return JWT.sign(
    {
        userId:this._id.toString(),
        email:this.email,
         isAdmin:this.isAdmin,
    },
 process.env.JWT_SECRET_KEY || 'default_secret_key',


    {
        expiresIn: '30d',
    }
   );
} catch (error) {
    console.log(error);
    
}
}
//comparePassword
userSchema.methods.comparePassword = async function (password){
    console.log("this",this);
    return await bcryptjs.compare(password,this.password)

}
 const User = new mongoose.model("USER", userSchema);
 export{User}