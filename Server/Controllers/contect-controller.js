// auth-controler.js
import { Contect } from "../model/contect-model";

const contectFrom = async (req, res) => {
  try {
    const response = req.body;
    await Contect.create(response)
    return res.status(200).json({ message: "message send successful" })
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" })
  }
}

export { contectFrom }