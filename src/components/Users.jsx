import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Users = ({ gender, email, registered }) => (
  <Card>
    <Card.Header as="h2">User List</Card.Header>
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

export default Users;
