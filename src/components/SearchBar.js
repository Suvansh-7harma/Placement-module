import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for recipes..."
      value={query}
      onChange={handleInputChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
