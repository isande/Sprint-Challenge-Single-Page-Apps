import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}></img>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}
