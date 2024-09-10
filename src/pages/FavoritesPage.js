import React, { useEffect, useState } from "react";
import Favorites from "../components/Favorites";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (recipeId) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.id !== recipeId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">
      <h1>Favorite Recipes</h1>
      <Favorites favorites={favorites} onRemove={removeFromFavorites} />
    </div>
  );
}

export default FavoritesPage;
