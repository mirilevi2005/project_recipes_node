const Recipe = require('../models/Recipe')

exports.getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find();
        res.json(recipe);
      } catch (error) {
        console.error('Failed to get recipe:', error);
        res.status(500).json({ message: 'Failed to get recipe' });
      }
};
exports.addRecipe = (req, res) => {};
exports.deleteRecipe = (req, res) => {};
exports.updateRecipe = (req, res) => {};

