const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller.js');
const validateRecipeInputMiddleware = require('../validator/validator.js');

router.get('/', controllers.MAIN_PAGE);

router.post('/recipes', validateRecipeInputMiddleware, controllers.ADDING_RECIPES);

router.put('/recipes/:id', validateRecipeInputMiddleware, controllers.UPDATE_RECIPES);

router.delete('/recipes/:id', validateRecipeInputMiddleware, controllers.DELETE_RECIPES);

module.exports = router;
