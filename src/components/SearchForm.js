import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard';

export default function SearchForm() {
  
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Data was not received", error);
      });

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
      <form>
        <input 
          type="text" 
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm} />
      </form>
      <Container>
        <Row>
        {searchResults.map(char => (
        <CharacterCard character={char}/>
      ))}
        </Row>
      </Container>
    </section>
  );
}
