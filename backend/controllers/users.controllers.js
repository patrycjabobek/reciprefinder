import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    await User.find()
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

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.email,
      lastName: req.body.email,
      email: req.body.email,
    });
    await newUser.save().then((response) => {
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

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({ response: updatedUser });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id).then(() => {
      res.status(200).send({ response: req.params.id });
    });
  } catch (er) {
    res.status(500).send({ response: er.message });
  }
};
