import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteRecipe, selectRecipeById } from "./recipesSlice";

import styles from "./styles/singleRecipePage.module.scss";

export const SingleRecipePage = () => {
  const recipeStatus = useSelector((state) => state.recipes.status);
  const { recipeId } = useParams();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    return () => {
      setIsMounted(true);
    };
  }, []);

  useEffect(() => {
    if (recipeStatus === "succeeded" && isMounted) {
      navigate("/");
    }
  }, [recipeStatus, navigate]);

  const onDeleteRecipeClicked = () => {
    dispatch(deleteRecipe(recipeId));
  };

  
  
  if (!recipe) {
    return (
      <section>
        <h2>Recipe not found!</h2>
      </section>
    );
  }
  
  const ingredientsList = recipe.ingredients.map((item, index) => (
    <tr key={item._id}>
      <td>
        {item.amount} {item.ingredientName}
      </td>
    </tr>
  ));

  return (
    <section>
      <article>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} />
        <table>
          <tbody>{ingredientsList}</tbody>
        </table>
        <p>{recipe.content}</p>
        <span>{recipe.category}</span>
        <span>{recipe.createdAtDate}</span>
        {/* <span>{recipe.user.firstName}</span> */}
        <Link to={`/editRecipe/${recipe._id}`}>Edit recipe</Link>
        <button type="button" onClick={onDeleteRecipeClicked}>
          Delete recipe
        </button>
      </article>
    </section>
  );
};
