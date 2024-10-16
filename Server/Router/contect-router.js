import express from 'express';
const Contectrouter = express.Router();
import { contectFrom } from "../Controllers/contect-controller"

Contectrouter.route("/contact").post(contectFrom)
export { Contectrouter }