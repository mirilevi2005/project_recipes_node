const express = require('express');
const router = express.Router();

const {getAllRecipes,addRecipe,deleteRecipe,updateRecipe}=require('../controllers/recipeController');

module.exports = router;
