import axios from "axios";

const baseUrl = 'http://localhost:8000/';

export const fetchRecipes = () => axios.get(`${baseUrl}/recipes`)
export const createRecipe = (newRecipe) => axios.post(`${baseUrl}/recipes`, newRecipe)
export const updateRecipe = (id, recipeToUpdate) => axios.put(`${baseUrl}/recipes/${id}`, recipeToUpdate)
export const deleteRecipe = (id) => axios.delete(`${baseUrl}/recipes/${id}`)
export const fetchUsers = () => axios.get(`${baseUrl}/users`)
export const createUser = (newUser) => axios.post(`${baseUrl}/users`,  newUser)
export const updateUser = (id, userToUpdate) => axios.put(`${baseUrl}/users/${id}`, userToUpdate)
export const deleteUser = (id) => axios.delete(`${baseUrl}/users/${id}`)