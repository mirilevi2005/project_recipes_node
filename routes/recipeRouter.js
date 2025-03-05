const express = require('express');
const router = express.Router();

const {getAllRecipes,addRecipe,deleteRecipe,getRecipeById}=require('../controllers/recipeController');

router.get('/',getAllRecipes);
router.post('/',addRecipe);
//router.delete('/:recipeId',deleteRecipe);
router.get('/:id',getRecipeById);


module.exports = router;
