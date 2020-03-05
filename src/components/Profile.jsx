import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Profile = ({ gender, location, email, registered, date }) => (
  <Card>
    <Card.Header as="h2">{location}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Profile</Card.Subtitle>
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

export default Profile;
