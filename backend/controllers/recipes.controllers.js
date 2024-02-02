import Recipe from "../models/Recipe.js";
import { mongoose } from "mongoose";
import asyncHandler from "express-async-handler";

export const getAllRecipes = asyncHandler(async (req, res) => {
  const response = await Recipe.find();

  res.status(200).json(response);
});

export const getOneRecipe = asyncHandler(async (req, res) => {
  await Recipe.findOne(req.params.id);
  res.status(200).json(response);
});

export const createRecipe =asyncHandler( async (req, res) => {
  const { title, content, ingridients, category } = req.body;

  const recipeExist = await Recipe.findOne({
    title,
    content,
    ingridients,
    category,
  });

  if (recipeExist) {
    res.status(400);
    throw new Error("Recipe already exists");
  }

  try {
    const newRecipe = new Recipe({
      _id: new mongoose.mongo.ObjectId(),
      title: req.body.title,
      content: req.body.content,
      ingridients: req.body.ingridients,
      category: req.body.category,
      image: req.body.image,
      createdAt: new Date().getDate(),
      // user: req.body.user,
    });
    await newRecipe.save().then((response) => {
      res.status(200).send({ response: response });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
})

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
    await Recipe.findByIdAndRemove(req.params.id).then(() => {
      res.status(200).send({ response: req.params.id });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};
