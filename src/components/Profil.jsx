import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";

const Profil = ({ age, city, country, email, login, picture, registered }) => (
  <Card>
    <Card.Header as="h3">{login.username}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Profil</Card.Subtitle>
      <Image src={picture.large} roundedCircle />
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <ListGroup variant="info">
      <ListGroup.Item>Age : {age}</ListGroup.Item>
      <ListGroup.Item>City : {city}</ListGroup.Item>
      <ListGroup.Item>Country : {country}</ListGroup.Item>
      <ListGroup.Item>Email : {email}</ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Registered since {new Date(registered).toDateString()}
      </small>
    </Card.Footer>
  </Card>
);

export default Profil;
