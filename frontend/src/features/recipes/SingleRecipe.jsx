import React from "react";
import styles from "./styles/recipesList.module.scss";
import { Link } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";

export const SingleRecipe = ({ recipe }) => {
  return (
    <article className={styles["recipe-excerpt"]} key={recipe._id + recipe}>
      <h3>{recipe.title}</h3>
      <div className={styles["square"]}>
        <img src={recipe.image} />
      </div>
      <TimeAgo timestamp={recipe.createdAtDate} />
      <Link to={`recipes/${recipe._id}`}>See more</Link>
    </article>
  );
};
