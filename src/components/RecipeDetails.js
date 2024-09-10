
import React from "react";
function RecipeDetails({ recipe, onSave }) {

  const handleSave = () => {
    onSave(recipe); 
    
  };

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <div className="img-ingrdiants">
        <div className="recipe-details-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="Ingrediants">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Instructions">
        <h4>Instructions:</h4>
        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />{" "}
        {/* Rendering HTML directly */}
      </div>

      {/* <div className="save">
        <button onClick={() => onSave(recipe)}>Save to Favorites</button>
      </div> */}
      <div className="save">
        <button onClick={handleSave}>Save to Favorites</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
