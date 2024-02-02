import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./db.js";

import recipeRoutes from "./routes/recipes.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
config();
app.use(cors());

app.use(express.json());

connectDB();

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server is running at http://${process.env.HOST}:${process.env.PORT}/`
  );
});
export default app;
