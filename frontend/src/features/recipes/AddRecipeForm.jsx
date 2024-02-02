import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createRecipe } from "./recipesSlice";

import styles from "./styles/addRecipeForm.module.scss";
import { Input } from "@mui/base/Input";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([{ amount: "", ingredientName: "" }]);
  const [category, setCategory] = useState("");
  const [user, setUser] = useState(null);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);

  const onInputFieldsValueChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...ingredients];
    onChangeValue[index][name] = value;
    setIngredients(onChangeValue);
  };

  const onAddInputFieldClicked = () => {
    setIngredients([...ingredients, { amount: "", ingredientName: "" }]);
  };

  const onDeleteinputFieldClicked = (index) => {
    const newArrayOfInputs = [...ingredients];
    newArrayOfInputs.splice(index, 1);

    setIngredients(newArrayOfInputs);
  };

  const canSave =
    [title, content, ingredients, category].every(Boolean) ;

  const onSaveRecipeClicked =  () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
         dispatch(
          createRecipe({ title, content, ingredients, image, category })
        )
        setTitle("");
        setContent("");
        setImage("");
        setCategory("");
        setIngredients([{ amount: "", ingredientName: "" }]);
      } catch (error) {
        console.error("Failed to save the post: ", error);
      } finally {
        setRequestStatus("idle");
      }
    }
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
    <section className={styles["add_recipe--container"]}>
      <h2 className={styles["add_recipe--header "]}>Add new recipe</h2>
      <form className={styles["add_recipe--form"]} action="/" method="post" encType="multipart/form-data">
        <div className={styles["form-group"]}>
          <label htmlFor="recipeTitle">Recipe title:</label>
          <Input
            type="text"
            name="recipeTitle"
            id="recipeTitle"
            value={title}
            onChange={onTitleChanged}
            required
          />
        </div>

        <h4>Ingredients</h4>
        <label htmlFor="amount">Amount</label>
        <label htmlFor="ingredientName">Name</label>

        {ingredients &&
          ingredients.map((item, index) => ingridientsInputFields(item, index))}
        {ingredients.length >= 1 && (
          <button type="button" onClick={onAddInputFieldClicked}>
            Add new ingridient
          </button>
        )}
        <label htmlFor="recipeContent">Recipe content:</label>
        <textarea
          name="recipeContent"
          id="recipeContent"
          value={content}
          onChange={onContentChanged}
          rows={10}
          cols={50}
          className={styles[""]}
          placeholder="1. Wash and cut the vegetables..."
          required
        />
        <label htmlFor="recipeCategory">Category</label>
        <input
          type="text"
          name="recipeCategory"
          id="recipeCategory"
          value={category}
          onChange={onCategoryChanged}
          required
        />
        <label htmlFor="recipeImage">Recipe image:</label>
        <Input
          type="file"
          src={image}
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          alt=""
          id="recipeImage"
          onChange={onImageChanged}
        />
        <button
          type="button"
          onClick={onSaveRecipeClicked}
          className={styles["save_button"]}
          disabled={!canSave}
        >
          Save recipe
        </button>
      </form>
    </section>
  );
};

export default AddRecipeForm;
