const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/authentication");
const address = require("./routes/address");
const patch = require("./routes/patch");
const image = require("./routes/imageresize");

const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/login", user);
app.use("/address", address);
app.use("/patch", patch);
app.use("/resize", image);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started...");
});
