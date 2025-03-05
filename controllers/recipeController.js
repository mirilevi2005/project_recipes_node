const Recipe = require('../models/Recipe')

exports.addRecipe = async (req, res) => {
  const recipe = await Recipe.create(req.body);
    res.json(recipe)
};

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
    const recipe = await Recipe.findOne({ _id:id });
    if (!recipe) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Failed to get recipe:', error);
    res.status(500).json({ message: 'Failed to get recipe' });
  }
};

exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleteRecipe = await Recipe.findOneAndDelete({ _id: id });
    if (!deleteRecipe) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Failed to delete Recipe:', error);
    res.status(500).json({ message: 'Failed to delete Recipe' });
  }
};


