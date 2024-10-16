
import express from "express";
import { Service } from "../model/servies-model";

// Define the service function
const service = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(400).json({ msg: "No service found" });
    }
    res.status(200).json({ msg: response });
 
  } catch (error) {
    console.log(`service: ${error}`);
  }
}
export{service}