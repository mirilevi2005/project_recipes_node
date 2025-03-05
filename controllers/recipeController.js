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

exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const recipe = await Recipe.findOne({ id });
    if (!recipe) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Failed to get recipe:', error);
    res.status(500).json({ message: 'Failed to get recipe' });
  }
};

