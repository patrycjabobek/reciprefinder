import Recipe from "../models/Recipe.js";
import { mongoose } from "mongoose";
import asyncHandler from "express-async-handler";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ dest: "uploads/", storage: storage });

export const getAllRecipes = asyncHandler(async (req, res) => {
  const response = await Recipe.find();

  res.status(200).json(response);
});

export const getSingleRecipe = asyncHandler(async (req, res) => {
  await Recipe.findOne(req.params.id);
  res.status(200).json(response);
});

export const createRecipe = asyncHandler(async (req, res) => {
  const { title, content, ingredients, category } = req.body;

  const recipeExist = await Recipe.findOne({
    title,
    content,
    ingredients,
    category,
  });

  if (recipeExist) {
    res.status(400);
    throw new Error("Recipe already exists");
  }
  const imageUploadObject = req.file ? {
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  } : {};

  try {
    const newRecipe = new Recipe({
      _id: new mongoose.mongo.ObjectId(),
      title: req.body.title,
      content: req.body.content,
      ingredients: req.body.ingredients,
      category: req.body.category,
      createdAtDate: new Date().toISOString(),
      ...imageUploadObject,
      // user: req.body.user,
    });
    await newRecipe.save().then((response) => {
      res.status(200).send({ response: response });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
});

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({ response: updatedRecipe });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id).then(() => {
      res.status(200).send({ response: req.params.id });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};
