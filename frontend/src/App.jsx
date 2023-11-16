import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import { Navbar } from "./app/Navbar";

import RecipesList from "./features/recipes/RecipesList";
import AddRecipeForm from "./features/recipes/AddRecipeForm";
import { SingleRecipePage } from "./features/recipes/SingleRecipePage";
import { EditRecipeForm } from "./features/recipes/EditRecipeForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipesList />
              </>
            }
          />
          <Route
            exact
            path="/recipes/:recipeId"
            element={<SingleRecipePage />}
          />
          <Route
            exact
            path="/editRecipe/:recipeId"
            element={<EditRecipeForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
