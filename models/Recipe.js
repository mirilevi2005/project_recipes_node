const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: String,
  recipeCategory: String,
  recipeInstructions: [String],
});

module.exports=mongoose.model('Recipe',RecipeSchema);