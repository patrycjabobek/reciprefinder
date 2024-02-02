import mongoose from "mongoose";
import {UserSchema} from "./User.js"


const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ingridients: {
    type: [
      {
        amount: String,
        ingridientName: String,
      },
    ],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  // user: {
  //   type: UserSchema,
  //   required: true,
  // },
});

export default mongoose.model("Recipe", RecipeSchema);
