import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RecipesContent } from "./RecipesContent";
import styles from "./styles/recipesList.module.scss";
import { fetchRecipes, selectAllRecipes } from "./recipesSlice";


const RecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectAllRecipes);
  const shouldDispatch = useRef(true);
  const recipeStatus = useSelector((state) => state.recipes.status);
  const error = useSelector((state) => state.recipes.error);

  useEffect(() => {
    if (recipeStatus === "idle" && shouldDispatch.current) {
      dispatch(fetchRecipes());
      shouldDispatch.current = false;
    }
  }, [recipeStatus, dispatch]);

  return (
    <section>
      <h2>Recipes</h2>
      <div className={styles["recipes-list__container"]}>
        <RecipesContent recipes={recipes} recipeStatus={recipeStatus} error={error}/>
      </div>
    </section>
  );
};

export default RecipesList;
