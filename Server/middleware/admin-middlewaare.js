const adminMiddleware = async(req,res,next) =>{
    try {
        // console.log( req.user);
const adminRole = req.user.isAdmin;

if(!adminRole){
return res.status(403).json({msg:"User is not Admin"})
}
next()

    } catch (error) {
        console.log(error);
        
    }
}
export{adminMiddleware}