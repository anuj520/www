import { User } from "../model/auth-model"
import { Contect } from "../model/contect-model"

const getAlluser = async(req,res) =>{
    try {
        const users = await User.find({},{password:0})
if (!users || users.length === 0) {
    res.status(404).json({msg: "No User Found"})
}

res.status(200).json(users)

    } catch (error) {
        next(error)
    }
}
//User Updated data get
const getUserId = async(req,res) =>{
    try {
        const id = req.params.id
     const data =  await User.findOne({_id:id},{password:0})

res.status(200).json(data)

    } catch (error) {
        console.log(error);
        
    }
}

const updateUserById = async(req,res,next) =>{
 try {
    const id = req.params.id
    const userData = req.body
 
    const udDatedata = await User.updateOne(
        {_id:id},
        {
            $set:userData
        }
    )

    res.status(200).json(udDatedata)
 } catch (error) {
next(error)    
 }   
}

//User Delete
const getDelete = async(req,res,next) =>{
try {
  const id = req.params.id;
  await User.deleteOne({_id:id})
  res.status(200).json({msg:"User Delete Sucessful"})  
} catch (error) {
    next(error)
}
}
//contect delete
const upContectrById = async(req,res,next) =>{
    try {
       const id = req.params.id;
       await Contect.deleteOne({_id:id})
       res.status(200).json({msg:"User Contect delete"}) 
    } catch (error) {
        next(error)
    }
}

//Contect-Admin
 const getContectAd = async(req,res) =>{
    try {
        const contect = await Contect.find()
if (!contect || contect.length === 0) {
    res.status(404).json({mag:"No contect found"})
}
res.status(200).json(contect)
    } catch (error) {
        next(error)
    }
}
export{getAlluser,getContectAd,getDelete,getUserId,updateUserById,upContectrById}