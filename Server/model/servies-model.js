
import { Schema, model } from "mongoose";

const ServicesSchema = new Schema({
    id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
duration: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});

const Service = model("Service", ServicesSchema);
export{Service}