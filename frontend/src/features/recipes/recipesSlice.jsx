import { createSlice, nanoid } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RECIPES } from "../../data/RECIPES";
import axios from "axios";

import * as api from '../../api/api.js'

const baseURL = "http://127.0.0.1:8000/";
const initialState = {
  recipes: [],
  status: 'idle',
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await fetch(`${baseURL}recipes`);
      return response?.data;
    } catch (er) {
      return er.response.data.message;
    }
  }
);

export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (recipe) => {
    try {
      const response = await axios.post(`${baseURL}recipes`, recipe);
      return response?.data;
    } catch (er) {
      console.log(er.response.data.message);
    }
  }
);

export const updateRecipe = createAsyncThunk(
  "recipes/updateRecipe",
  async (recipe) => {
    try {
      const response = await axios.put(`${baseURL}recipes/${recipe._id}`, {
        title: recipe.title,
        content: recipe.content,
        ingridients: recipe.ingridients,
        category: recipe.category,
        image: recipe.image,
        createdAt: new Date().getDate(),
        user: recipe.user,
      });
      return response?.data;
    } catch (er) {
      console.log(er.response.data.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (recipeId) => {
    try {
      const response = await axios.delete(`${baseURL}recipes/${recipeId}`);
      return recipeId;
    } catch (er) {
      console.log(er.response.data.message);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(createRecipe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(createRecipe.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteRecipe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(deleteRecipe.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateRecipe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(updateRecipe.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});



export default recipesSlice.reducer;

export const selectAllRecipes = (state) => state.recipes.recipes;

export const selectRecipeById = (state, recipeId) =>
  state.recipes.recipes.find((recipe) => recipe.id === recipeId);
