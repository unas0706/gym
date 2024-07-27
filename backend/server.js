import app from "./app.js";
import connectDB from "./DBConnection.js";

connectDB();

app.listen(4000, () => {
  console.log("Server has started");
});
