import { User } from "../model/auth-model";

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the best MERN series in Thapa Technical");
    } catch (error) {
        console.error("Error in home handler:", error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password, isAdmin } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password, isAdmin });

        res.status(201).json({ 
            msg: "Registration successful", 
            token: await userCreated.genratedToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error("Error in register handler:", error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await userExists.comparePassword(password);

        if (isMatch) {
            res.status(200).json({ 
                msg: "Login successful", 
                
                token: await userExists.genratedToken(),
                userId: userExists._id.toString(),
            });
        } else {
            res.status(401).json({ msg: 'Invalid email or password' });
        }
    } catch (error) {
        next(err)
    }
};
 
// set user

const user = (req,res) =>{
    try {
const userData = req.user;
console.log(userData);
return res.status(200).json({userData})

    } catch (error) {
        console.log(error);
        
    }
} 

export { home, register, login,user };
