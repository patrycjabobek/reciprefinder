import mongoose from "mongoose";
import { UserSchema } from "./User.js";

const IngredientSchema = mongoose.Schema({
  amount: String,
  ingredientName: String,
});

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [
      IngredientSchema
    ],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  createdAtDate: {
    type: Date,
    default: Date.now
  },
  // user: {
  //   type: UserSchema,
  //   required: true,
  // },
});

export default mongoose.model("Recipe", RecipeSchema);
