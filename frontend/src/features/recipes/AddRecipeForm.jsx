import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createRecipe } from "./recipesSlice";

import styles from "./styles/addRecipeForm.module.scss";
import { Input } from "@mui/base/Input";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [ingridients, setIngridients] = useState([{ amount: "", name: "" }]);
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

  const canSave =
    [title, content, ingridients].every(Boolean) && requestStatus === "idle";

  const onSaveRecipeClicked = async () => {
    if (cancelAnimationFrame) {
      try {
        setRequestStatus("pending");
        await dispatch(
          createRecipe({ title, content, ingridients, image, category, user: null })
        ).unwrap();
        setTitle("");
        setContent("");
        setImage("");
        setIngridients([]);
        setCategory("");
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
    <section className={styles["add_recipe--container"]}>
      <h2 className={styles["add_recipe--header "]}>Add new recipe</h2>
      <form className={styles["add_recipe--form"]}>
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
          alt=""
          id="recipeImage"
          onChange={onImageChanged}
        />
        <button
          type="button"
          onClick={onSaveRecipeClicked}
          className={styles["save_wbutton"]}
        >
          Save recipe
        </button>
      </form>
    </section>
  );
};

export default AddRecipeForm;
