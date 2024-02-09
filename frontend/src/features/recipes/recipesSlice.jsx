import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8000/";

const initialState = {
  recipes: [],
  // recipe: null,
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}recipes`);
      return response.data;
    } catch (er) {
      return rejectWithValue(er.response.data.message);
    }
  }
);

// export const fetchSingleRecipeById = createAsyncThunk(
//   "recipe/fetchSingleRecipeById",
//   async (recipe) => {
//     try {
//       const response = await axios.get(`${baseURL}recipe/${recipe._id}`);
//       return response.data;
//     } catch (er) {
//       return er.response.data.message;
//     }
//   }
// );

export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (recipe) => {
    try {
      const response = await axios.post(`${baseURL}recipes`, recipe);
      return response.data;
    } catch (er) {
      return er.response.data.message;
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
        ingredients: recipe.ingredients,
        category: recipe.category,
        image: recipe.image,
        // user: recipe.user,
      });
      return response.data;
    } catch (er) {
      return er.response.data.message;
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (recipeId) => {
    try {
      const response = await axios.delete(`${baseURL}recipes/${recipeId}`);
      if (response.data) {
        return recipeId;
      }
    } catch (er) {
      return er.response.data.message;
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = state.recipes.concat(action.payload);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createRecipe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = [...state.recipes, action.payload.response];
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.recipes.findIndex(
          (recipe) => recipe._id === action.payload.response._id
        );
        console.log(action.payload);
        if (index !== -1) {
          state.recipes[index] = action.payload.response;
        }
      });
      // .addCase(updateRecipe.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      // .addCase(fetchSingleRecipeById.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchSingleRecipeById.fulfilled, (state, action) => {
      //   state.status = "succeeded";

      //   // state.recipe = action.payload;
      // })
      // .addCase(fetchSingleRecipeById.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // });
  },
});

export default recipesSlice.reducer;

export const selectAllRecipes = (state) => state.recipes.recipes;

export const selectRecipeById = (state, recipeId) =>
  state.recipes.recipes.find((recipe) => recipe._id === recipeId);
