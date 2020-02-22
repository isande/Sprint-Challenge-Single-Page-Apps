import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
      })
      .catch (error => {
        console.log("Data was not received", error);
      });
  }, []);

  return (
    <section className="character-list">
      <Container>
        <Row>
      {characters.map(character => {
        return <CharacterCard character={character} key={character.id}/>;
      })}
        </Row>
      </Container>
    </section>
  );
}
