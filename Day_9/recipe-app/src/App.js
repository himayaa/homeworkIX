// src/App.js

import React from 'react';
import './App.css'; // Import the CSS file
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
