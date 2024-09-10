// import React, { useState } from "react";
// import { Link } from "react-router-dom"; 
// import SearchBar from "../components/SearchBar";
// import RecipeList from "../components/RecipeList";
// import axios from "axios";

// function Home() {
//   const [recipes, setRecipes] = useState([]);

//   const fetchRecipes = (query) => {
//     if (query.length === 0) {
//       setRecipes([]);
//       return;
//     }
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=57e8c09d00a94766973e0a13f3eb70b3`
//       )
//       .then((response) => {
//         setRecipes(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching recipes:", error);
//       });
//   };

//   return (
//     <div className="home">
//       <h1>Recipe Finder</h1>
//       <SearchBar onSearch={fetchRecipes} />
//       <RecipeList recipes={recipes} />
//       <Link to="/favorites">
//         <button className="show-favorites-btn">Show Favorite Recipes</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import axios from "axios";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(3); // Show 3 recipes per page

  const fetchRecipes = (query) => {
    if (query.length === 0) {
      setRecipes([]);
      return;
    }
    
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=36301b3d319e41db80a25a04927071ad`
      )
      .then((response) => {
        setRecipes(response.data.results);
        setCurrentPage(1); // Reset to the first page on new search
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };

  // Get the current recipes based on the currentPage
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
     
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={currentRecipes} />
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(recipes.length / recipesPerPage) },
          (_, index) => (
            <button
              className={"pagination-button"}
              key={index + 1}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      <Link to="/favorites">
        <button className="show-favorites-btn">Show Favorite Recipes</button>
      </Link>
    </div>
  );
}

export default Home;
