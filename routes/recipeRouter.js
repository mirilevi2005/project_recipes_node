const express = require('express');
const router = express.Router();

const {addRecipe,deleteRecipe,updateRecipe}=require('../controllers/recipeController');

module.exports = router;
