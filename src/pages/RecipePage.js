import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import axios from "axios";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=36301b3d319e41db80a25a04927071ad`
      )

      .then((response) => {
        setRecipe({
          id: response.data.id,
          title: response.data.title,
          image: response.data.image,
          ingredients: response.data.extendedIngredients.map(
            (ing) => ing.original
          ),
          instructions: response.data.instructions,
        });
      })
      .catch((error) => {
        // console.error("Error fetching recipe details:", error);
      });
  }, [id]);

  const saveToFavorites = (recipe) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(recipe);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div>
      {recipe ? (
        <RecipeDetails recipe={recipe} onSave={saveToFavorites} />
      ) : (
        <div className="loader-box">
          <h1>Good Choice !</h1>
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default RecipePage;
