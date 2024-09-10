// import React from "react";
// import { Link } from "react-router-dom";

// function RecipeList({ recipes }) {
//   return (
//     <div className="recipe-list">
//       {recipes.map((recipe) => (
//         <div key={recipe.id} className="recipe-item">
//           <Link to={`/recipe/${recipe.id}`}>
//             <img src={recipe.image} alt={recipe.title} />
//             <h3>{recipe.title}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecipeList;
import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
