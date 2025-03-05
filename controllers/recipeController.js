const Recipe=require("../models/Recipe")
exports.addRecipe = async (req, res) => {
    const resipe = await Recipe.create(req.body);
    res.json(recipe)
};

