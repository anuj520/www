import express from 'express';
import { home,login,register, user } from "../Controllers/auth-controllers";
import {loginSchema, signupSchema} from "../validation/auth-validation"
import{validate} from "../middleware/validation-middle"
import { authMiddleware } from '../middleware/authMiddleware';
const router = express.Router();

router.route("/").get(home)
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(validate(loginSchema), login)
router.route('/user').get(authMiddleware, user)
export { router };
