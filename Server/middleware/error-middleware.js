const middleerror = (err,req,res,next)=>{
    const status = err.status|| 500;
    const message = err.message||"BACKEND ERROR";
    const extraDetalies = err.extraDetalies||"ERROR from BACKEND";
    
    return res.status(status).json({message,extraDetalies})
    }
    export {middleerror}