import React from "react";

function Favorites({ favorites, onRemove }) {
  return (
    <div className="favorites-list">
      {favorites.map((recipe) => (
        <div key={recipe.id} className="favorite-item">
          <div className="fav-img-name">
            <img src={recipe.image} alt={recipe.title} />
            <h3 className="fav-heading">{recipe.title}</h3>
          </div>
          <div className="fav-remove-btn">
            <button className="remove-btn" onClick={() => onRemove(recipe.id)}>
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
