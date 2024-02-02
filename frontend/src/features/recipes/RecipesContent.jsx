import React from "react";
import styles from "./styles/recipesList.module.scss";
import { Loader } from "../../components/Loader/Loader";
import { SingleRecipe } from "./SingleRecipe";

export const RecipesContent = (recipes, recipeStatus, error) => {
  if (recipes.status === "loading") {
    return <Loader text="Loading..." />;
  }

  if (recipeStatus === "failed") {
    return <div>{error}</div>;
  }

  if (recipes.length === 0) {
    return (
      <section>
        <h2>Recipes</h2>
        <div className={styles["recipes-list__container"]}>
          <h3>No recipes found</h3>
        </div>
      </section>
    );
  }

  const orderedRecipes = recipes.recipes
    .slice()
    .sort((a, b) =>
      b.createdAtDate ? b.createdAtDate.localeCompare(a.createdAtDate) : ""
    );

    
  return orderedRecipes.map((recipe) => (
    <SingleRecipe key={recipe._id + recipe.title} recipe={recipe} />
  ));
};
