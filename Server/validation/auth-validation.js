import z from "zod"

const loginSchema = z.object({
    email: z
    .string({message:"email is required"})
     .trim()
     .min(5,{message:"email must be at last 8 char.."})
     .max(25,{message:"email must be not be morethen 19 characters"}),
    
     password:z
     .string({message:"password is required"})
     .trim()
     .min(5,{message:"password must be at last 8 char.."})
     .max(12,{message:"password must be not be morethen 25 characters"}),
})



const signupSchema = loginSchema.extend({
    username :z 
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message :"Name must be at last 3 char.."})
    .max(255,{message:"Name must be not be morethen 255 characters"}),

   
     phone:z
    .string({message:"phone is required"})
    .trim()
    .min(5,{message:"phone must be at last 10 char.."})
    .max(19,{message:"phone must be not be morethen 19 characters"}),

})
export{signupSchema,loginSchema}