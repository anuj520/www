import express from "express"
import { service } from "../Controllers/service-controller"
const serviceRouter = express.Router()

serviceRouter.route("/service").get(service)
export{serviceRouter}