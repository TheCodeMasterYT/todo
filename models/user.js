const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    dunique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  list: [
    {
      type: mongoose.Types.ObjectId,
      ref: "List",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
