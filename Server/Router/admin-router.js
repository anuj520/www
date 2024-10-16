import express from "express"
import { getAlluser,getContectAd,getDelete,getUserId,updateUserById,upContectrById } from "../Controllers/admin-controller"
import { authMiddleware } from "../middleware/authMiddleware"
import { adminMiddleware } from "../middleware/admin-middlewaare"
const adminRouter = express.Router()

adminRouter.route('/users').get(authMiddleware,adminMiddleware, getAlluser)

adminRouter.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,getDelete)

adminRouter.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUserById)

adminRouter.route('/users/:id').get(authMiddleware,adminMiddleware,getUserId)

adminRouter.route('/contect').get( authMiddleware,adminMiddleware,getContectAd)
adminRouter.route('/contect/delete/:id').delete(authMiddleware,adminMiddleware,upContectrById)
export{adminRouter}
