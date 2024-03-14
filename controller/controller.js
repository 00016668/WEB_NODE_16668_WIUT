const  readFileCustom  = require("../helpers/readFileHelper");
const  writeFileCustom  = require("../helpers/writeFileHelper");

const controllers = {
    MAIN_PAGE: (_, res) => {
        const allRecipes = readFileCustom('dataDB.json');
        res.render('index.ejs', { allRecipes });
    },
    ADDING_RECIPES: (req, res) => {
        const { title, description, ingredients, instructions } = req.body;
        
        
            // Read existing recipes
            const allRecipes = readFileCustom('dataDB.json');

            // Check if a recipe with the same title already exists
            const existingRecipe = allRecipes.find(recipe => recipe.title == title);
            if (existingRecipe) {
                return res.status(400).json({
                    message: "Recipe already exists"
                });
            }else{
                // Generate a new recipe ID
                const newRecipeId = allRecipes.length > 0 ? allRecipes[allRecipes.length - 1].id + 1 : 1;

                // Create the new recipe object
                const newRecipe = {
                    id: newRecipeId,
                    title,
                    description,
                    ingredients,
                    instructions
                };

                // Add the new recipe to the list
                allRecipes.push(newRecipe);
            }

        // Write updated recipes back to the file
        writeFileCustom('/dataDB.json', allRecipes);

        // Redirect to the main page
        res.redirect('/app');
        
    },
    UPDATE_RECIPES: (req, res) => {
        const { id } = req.params;
        const { title, description, ingredients, instructions } = req.body;
    
        // Read existing recipes
        let allRecipes = readFileCustom('dataDB.json');
    
        // Find the recipe to update
        const recipeToUpdate = allRecipes.findIndex(recipe => recipe.id === +id);
        if (!recipeToUpdate) {
            return res.status(404).json({ message: "Recipe not found" });
        }
    
        // Update the recipe fields
        recipeToUpdate.title = title;
        recipeToUpdate.description = description;
        recipeToUpdate.ingredients = ingredients;
        recipeToUpdate.instructions = instructions;
    
        // Write updated recipes back to the file
        writeFileCustom('dataDB.json', allRecipes);
    
        // Redirect to the main page
        res.redirect('/app');
    },
    DELETE_RECIPES: (req, res) => {
        const { id } = req.params;

        // Read existing recipes
        let allRecipes = readFileCustom('dataDB.json');

        // Find the index of the recipe to delete
        const recipeIndex = allRecipes.find(recipe => recipe.id === id);
        if (recipeIndex === -1) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        // Remove the recipe from the array
        allRecipes.splice(recipeIndex, 1);

        // Write updated recipes back to the file
        writeFileCustom('dataDB.json', allRecipes);

        // Respond with a success message
        res.json({ message: "Recipe deleted successfully" });
        }
};

module.exports = controllers;








