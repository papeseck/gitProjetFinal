const mongoose = require("mongoose");
const { isEmail } = require("validator");

const aviSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      trim: true,
    },
    prenom: {
      type: String,
    },
    nom: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail],
      trim: true,
    },
    telephone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Avi", aviSchema);
