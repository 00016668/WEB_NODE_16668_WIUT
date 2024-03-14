const validator = require('validator');

const validateRecipeInputMiddleware = (req, res, next) => {
  const data = req.body;
  const errors = {};

  // Validate title length
  if (!data.title || !validator.isLength(data.title, { min: 1, max: 60 })) {
    errors.title = 'Title must be between 1 and 60 characters';
  }

  // Validate description length
  if (!data.description || !validator.isLength(data.description, { min: 30 })) {
    errors.description = 'Description must be at least 30 characters';
  }

  // Validate ingredients length
  if (!data.ingredients || !validator.isLength(data.ingredients, { min: 40 })) {
    errors.ingredients = 'Ingredients must be at least 40 characters';
  }

  // Validate instructions length
  if (!data.instructions || !validator.isLength(data.instructions, { min: 40 })) {
    errors.instructions = 'Instructions must be at least 40 characters';
  }

  // Check if there are validation errors
  if (Object.keys(errors).length !== 0) {
    // If there are errors, pass them to the error handling middleware
    const err = new Error('Invalid recipe data');
    err.statusCode = 400;
    err.errors = errors;
    return next(err);
  }

  // If validation passes, proceed to the next middleware
  next();
};

module.exports = validateRecipeInputMiddleware;
