import React, { useState } from "react";

export default function SearchForm({characters}) {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({characters});

  return (
    <section className="search-form">
      <form>
        <input 
          type="text" 
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm} />
      </form>
    </section>
  );
}
