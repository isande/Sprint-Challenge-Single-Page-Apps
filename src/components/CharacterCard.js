import React from "react";
import { Card, CardHeader, CardBody, CardText, Col, CardImg } from "reactstrap";

export default function CharacterCard({ character }) {
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
      <CardHeader>{character.name}</CardHeader>
      <CardBody>
      <CardImg src={character.image} alt={character.name}/>
      <CardText>Status: {character.status}</CardText>
      <CardText>Species: {character.species}</CardText>
      <CardText>Gender: {character.gender}</CardText>
      </CardBody>
      </Card>
    </Col>
  );
}
