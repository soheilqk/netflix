const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB error", err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("backend server is running");
});
