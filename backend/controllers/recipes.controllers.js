import Recipe from "../models/Recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    await Recipe.find()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((er) => {
        res.status(500).send({ response: er.message });
      });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const getOneRecipe = async (req, res) => {
  try {
    await Recipe.findOne(req.params.id)
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((er) => {
        res.status(500).send({ response: er.message });
      });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      title: req.body.title,
      content: req.body.content,
      ingridients: req.body.ingridients,
      category: req.body.category,
      image: req.body.image,
      createdAt: new Date().getDate(),
      // user: req.body.user,
    });
    await newRecipe.save().then((response) => {
      res
        .status(200)
        .send({ response: response })
        .catch((er) => {
          res.status(500).send({ response: er.message });
        });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({ response: updatedRecipe });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id).then(() => {
      res.status(200).send({ response: req.params.id });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};
