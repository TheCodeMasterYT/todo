const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://user:prabh9592023223@cluster0.z1ljhia.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
