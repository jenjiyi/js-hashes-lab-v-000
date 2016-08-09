'use strict';
var recipes = {};

function addIngredient(recipes, ingredients, amounts) {
  recipes[ingredients] = amounts;
  return recipes;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(recipe) {
  for ( var key in recipe ){
    console.log(`this recipe calls for ${recipe[key]} of ${key}`);
  }
}
