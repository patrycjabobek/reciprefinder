import express from "express";
import cors from "cors";
import multer from 'multer'
import { config } from "dotenv";
import { connectDB } from "./db.js";

import recipeRoutes from "./routes/recipes.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
config();
app.use(cors());
app.use(express.json());


const storage = multer.memoryStorage();

connectDB();

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(
    `Server is running at http://${HOST}:${PORT}/`
  );
});
export default app;
