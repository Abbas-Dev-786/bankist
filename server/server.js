require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to request on port ${port}`);
});
