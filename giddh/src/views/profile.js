import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const {isAuthenticated, user} = useAuth0();
  return (    
    isAuthenticated && (
    <Container className="mb-5 text-white">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img src={user.picture} alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
        </Col>
        <Col mb>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
    </Container>
    )
  );
};

export default Profile;
