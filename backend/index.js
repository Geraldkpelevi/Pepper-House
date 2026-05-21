const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/usersRoute.js");
const menuRoute = require("./routes/menusCategoriesRoute.js");
const { connectToDatabase } = require("./config/mongodbConnection.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/menusCategories", menuRoute);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
  connectToDatabase();
});
