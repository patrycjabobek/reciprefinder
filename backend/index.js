import app from "./app.js";
import { PORT, HOST } from "./config.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});
