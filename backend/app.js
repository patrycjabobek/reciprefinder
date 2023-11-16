import express from "express";
import cors from "cors";

import recipeRoutes from "./routes/recipes.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {res.send('Hi')})

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
  });
export default app;
