import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteRecipe, selectRecipeById } from "./recipesSlice";

import styles from "./styles/singleRecipePage.module.scss";

export const SingleRecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId));
  

  const onDeleteRecipeClicked = () => {
    dispatch(deleteRecipe(recipeId));
    navigate("/");
  };

  const ingridientsList = recipe.ingridients.map((item) => (
    <tr key={item.name}>
      <td>
        {item.amount} {item.name}
      </td>
    </tr>
  ));


  if (!recipe) {
    return (
      <section>
        <h2>Recipe not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} />
        <table>
          <tbody>{ingridientsList}</tbody>
        </table>
        <p>{recipe.content}</p>
        <span>{recipe.category}</span>
        <span>{recipe.createdAt}</span>
        <span>{recipe.user.firstName}</span>
        <Link to={`/editRecipe/${recipe.id}`}>Edit recipe</Link>
        <button type="button" onClick={onDeleteRecipeClicked}>
          Delete recipe
        </button>
      </article>
    </section>
  );
};
