const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: String,
  recipeCategory: String,
  recipeInstructions: Array,
});
