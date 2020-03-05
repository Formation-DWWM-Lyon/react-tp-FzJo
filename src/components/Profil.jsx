import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Profil = ({}) => (
  <Card>
    <Card.Header as="h2">{location}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Profile</Card.Subtitle>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <ListGroup variant="info">
      <ListGroup.Item>Gender: {gender}</ListGroup.Item>
      <ListGroup.Item>Email: {email}</ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Registered since {new Date(registered).toDateString()}
      </small>
    </Card.Footer>
  </Card>
);

export default Profil;
