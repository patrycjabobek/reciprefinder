import { Router } from "express";
import {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.controllers.js";

const router = Router();

router.get("/", getAllRecipes);
router.get("/:id", getOneRecipe);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;