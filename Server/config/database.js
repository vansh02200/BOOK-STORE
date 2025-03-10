const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://Vansh02200:Vanshvanshch2@cluster0.5g8f7.mongodb.net/BOOKMANAGEMENT", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db ka connection is successful");
    })
    .catch((error) => {
      console.log("issue in DB connection");
      console.log(error.message);

      process.exit(1);
    });
};
module.exports = dbConnect;