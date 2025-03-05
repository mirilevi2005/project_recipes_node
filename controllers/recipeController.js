const Resipe=require("../models/Recipe")
exports.addRecipe = async (req, res) => {
    const resipe = await Resipe.create(req.body);
    res.json(resipe)
};
exports.deleteRecipe = (req, res) => {};
exports.updateRecipe = (req, res) => {};
