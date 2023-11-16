import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { TimeAgo } from "./TimeAgo";
import styles from "./styles/recipesList.module.scss";
import { fetchRecipes, selectAllRecipes } from "./recipesSlice";

const RecipesList = () => {
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();
  // const recipes = dispatch(fetchRecipes());

  const recipeStatus = useSelector((state) => state.recipes.status);

  useEffect(() => {
    console.log(recipeStatus);
    if (recipeStatus === "idle") {
      dispatch(fetchRecipes());
    }
    console.log(recipes);

  }, [recipeStatus, dispatch]);


  const orderedRecipes = recipes
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedRecipes = orderedRecipes.map((recipe) => (
    <article className={styles["recipe-excerpt"]} key={recipe.id}>
      <h3>{recipe.title}</h3>
      <div className={styles["square"]}>
        <img src={recipe.image} />
      </div>
      <TimeAgo timestamp={recipe.date} />
      <Link to={`recipes/${recipe.id}`}>See more</Link>
    </article>
  ));

  return (
    <section>
      <h2>Recipes</h2>
      <div className={styles["recipes-list__container"]}>{renderedRecipes}</div>
    </section>
  );
};

export default RecipesList;
