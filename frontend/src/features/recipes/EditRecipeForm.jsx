import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateRecipe, selectRecipeById } from "./recipesSlice";

import { Input } from "@mui/base/Input";

import styles from "./styles/editRecipeForm.module.scss";

export const EditRecipeForm = () => {
  const { recipeId } = useParams();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId));
  let recipeStatus = useSelector((state) => state.recipes.status);
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(recipe.title || "");
  const [content, setContent] = useState(recipe.content || "");
  const [category, setCategory] = useState(recipe.category || "");
  const [image, setImage] = useState(recipe.image || "");
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);

  const canSave = [title, content, ingredients, category].every(Boolean);


  useEffect(() => {
    if (isEditing && recipeStatus === "succeeded") {
      navigate(`/recipes/${recipeId}`);
    }
  }, [recipeStatus, navigate, recipeId]);

  const onSaveRecipeClicked = () => {
    const updatedRecipe = {
      _id: recipeId,
      title,
      content,
      ingredients,
      category,
      image,
    };
    if (canSave) {
      setIsEditing(true);
      dispatch(updateRecipe(updatedRecipe));
      
    }
  };

  const onInputFieldsValueChange = (event, index) => {
    const { name, value } = event.target;
    const updatedIngridients = JSON.parse(JSON.stringify([...ingredients]));
    updatedIngridients[index][name] = value;
    setIngredients(updatedIngridients);
  };

  const onAddInputFieldClicked = () => {
    setIngredients([...ingredients, { amount: "", ingredientName: "" }]);
  };

  const onDeleteinputFieldClicked = (index) => {
    const newArrayOfInputs = [...ingredients];
    newArrayOfInputs.splice(index, 1);

    setIngredients(newArrayOfInputs);
  };

  const ingredientsInputFields = (input, index) => (
    <div className="form-group" key={index}>
      <Input
        type="text"
        name="amount"
        id="amount"
        placeholder="1 cup"
        value={input.amount}
        onChange={(event) => onInputFieldsValueChange(event, index)}
        required
      />
      <Input
        type="text"
        name="ingredientName"
        id="ingredientName"
        placeholder="flour"
        value={input.ingredientName}
        onChange={(event) => onInputFieldsValueChange(event, index)}
        required
      />
      {ingredients.length !== 1 && (
        <button
          type="button"
          onClick={() => onDeleteinputFieldClicked(index)}
          className={styles["delete_button"]}
        >
          Delete
        </button>
      )}
    </div>
  );

  return (
    <section>
      <h2>Edit Recipe</h2>
      <form encType="multipart/form-data">
        <label htmlFor="recipeTitle">Recipe title:</label>
        <input
          type="text"
          name="recipeTitle"
          id="recipeTitle"
          placeholder="Chicken alfredo"
          value={title}
          onChange={onTitleChanged}
        />
        <h4>Ingredients</h4>
        <label htmlFor="amount">Amount</label>
        <label htmlFor="ingridientName">Name</label>
        {ingredients &&
          ingredients.map((item, index) => ingredientsInputFields(item, index))}
        {ingredients.length >= 1 && (
          <button type="button" onClick={onAddInputFieldClicked}>
            Add new ingredient
          </button>
        )}
        <label htmlFor="recipeContent">Recipe content:</label>
        <input
          type="text"
          name="recipeContent"
          id="recipeContent"
          placeholder="Chicken alfredo"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Pasta"
          value={category}
          onChange={onCategoryChanged}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          id="image"
          value={image}
          onChange={onImageChanged}
        />
      </form>
      <button type="button" onClick={onSaveRecipeClicked}>
        Save recipe
      </button>
    </section>
  );
};
