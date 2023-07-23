// src/components/RecipeForm.js

import React, { useState } from 'react';
import firebase from '../firebase';

const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAddRecipe = () => {
    if (recipeName && ingredients) {
      const recipeRef = firebase.database().ref('recipes');
      const newRecipe = {
        name: recipeName,
        ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      };
      recipeRef.push(newRecipe);
      setRecipeName('');
      setIngredients('');
    }
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};

export default RecipeForm;
