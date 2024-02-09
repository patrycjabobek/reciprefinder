import { Router } from "express";
import multer from "multer";
import {
  getAllRecipes,
  getSingleRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.controllers.js";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = Router();

router.get("/", getAllRecipes);
router.get("/:id", getSingleRecipeById);
router.post("/", upload.single("image"), createRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
