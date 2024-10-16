const validate = (schema) =>async(req,res,next)=>{
    try {
      const parseBody = await schema.parseAsync(req.body)//ye make sure kergea ki user na jo data fil ki yo hemara zod se metch kerta ha ki nahi
      req.body = parseBody
      next()  
    } catch (err) {
      const status = 422
      const message = "Fill the input properties"
      const extraDetalies = err.errors[0].message;

      const error ={
        status,
        message,
        extraDetalies
      }
      console.log(error);
         next(error)
    }
}
export{validate}