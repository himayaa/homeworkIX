// src/components/RecipeList.js

import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipeRef = firebase.database().ref('recipes');
    recipeRef.on('value', (snapshot) => {
      const recipeData = snapshot.val();
      if (recipeData) {
        const recipeList = Object.keys(recipeData).map((key) => ({
          id: key,
          ...recipeData[key],
        }));
        setRecipes(recipeList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>
            <p>{recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
