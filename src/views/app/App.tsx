import "./App.css";
import Container from 'react-bootstrap/Container';
import { Recipes } from "../recipes/Recipes";

import { Button } from '../../components/Button';
import { Col, Row } from "react-bootstrap";


export const App = () => {
  return (
    <Container >
      <h2 className="header">Welcome To Chefs Hub</h2>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Button
            margin="20px"
            size="medium" primary
            label="New"
            backgroundColor="#4bb357"
            onClick={() => window.location.href = "/new"} />
        </Col>
        <Col></Col>
      </Row>
      <Recipes />
    </Container>
  );
}

