const Resipe=require("../models/Recipe")
exports.addRecipe = async (req, res) => {
    const resipe = await Resipe.create(req.body);
    res.json(resipe)
};

