import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateRecipe } from "./recipesSlice";

import { Input } from "@mui/base/Input";

import styles from "./styles/editRecipeForm.module.scss";

export const EditRecipeForm = () => {
  const { recipeId } = useParams();

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === recipeId)
  );

  const [title, setTitle] = useState(recipe.title);
  const [content, setContent] = useState(recipe.content);
  const [category, setCategory] = useState(recipe.category);
  const [image, setImage] = useState(recipe.image);
  const [ingridients, setIngridients] = useState(recipe.ingridients);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);
  const onIngridientsChanged = (e) => setIngridients(e.target.value);

  const onSaveRecipeClicked = () => {
    if (title && content) {
      dispatch(
        updateRecipe({
          id: recipeId,
          title,
          content,
          ingridients,
          category,
          image,
        })
      );
      navigate(`/recipes/${recipeId}`);
    }
  };

  const onInputFieldsValueChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...ingridients];
    onChangeValue[index][name] = value;
    setIngridients(onChangeValue);
  };

  const onAddInputFieldClicked = () => {
    setIngridients([...ingridients, { amount: "", name: "" }]);
  };

  const onDeleteinputFieldClicked = (index) => {
    const newArrayOfInputs = [...ingridients];
    newArrayOfInputs.splice(index, 1);

    setIngridients(newArrayOfInputs);
  };

  const ingridientsInputFields = (input, index) => (
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
        name="name"
        id="name"
        placeholder="1 cup"
        value={input.name}
        onChange={(event) => onInputFieldsValueChange(event, index)}
        required
      />
      {ingridients.length !== 1 && (
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
      <form>
        <label htmlFor="recipeTitle">Recipe title:</label>
        <input
          type="text"
          name="recipeTitle"
          id="recipeTitle"
          placeholder="Chicken alfredo"
          value={title}
          onChange={onTitleChanged}
        />
        <h4>Ingridients</h4>
        <label htmlFor="amount">Amount</label>
        <label htmlFor="name">Name</label>
        {ingridients &&
          ingridients.map((item, index) => ingridientsInputFields(item, index))}
        {ingridients.length >= 1 && (
          <button type="button" onClick={onAddInputFieldClicked}>
            Add new ingridient
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
          value={title}
          onChange={onCategoryChanged}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="image"
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
