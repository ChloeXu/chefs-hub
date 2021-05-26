import React from 'react';
import './NewRecipe.module.css';
import Container from "react-bootstrap/esm/Container";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from '../../components/Button';

export interface NewRecipeProps {
}

export const NewRecipe: React.FC = () => {
    return (
        <Container >
            <h2 className="header" >Add a new recipe</h2>
            <Row className="pl-20 pr-20 pb-20">
                <Col></Col>
                <Col xs={8}>
                    <Row className="top-bar-control">
                        <Button onClick={() => window.location.href = "/"} margin="0 15px 0 15px" label="Back">
                        </Button>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row className="p-20">
                <Col></Col>
                <Col xs={8}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDish">
                                <Form.Label>Dish name</Form.Label>
                                <Form.Control type="name" placeholder="Enter dish name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCuisine">
                                <Form.Label>Cuisine</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Italian</option>
                                    <option>Thai</option>
                                    <option>Chinese</option>
                                    <option>Japanese</option>
                                    <option>Greek</option>
                                    <option>American</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Ingredient name</Form.Label>
                                <Form.Control type="name" placeholder="Ingredient name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" placeholder="Quantity" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridUnit">
                                <Form.Label>Unit</Form.Label>
                                <Form.Control type="text" placeholder="Unit" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Instructions</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Save as favorite" />
                        </Form.Group>

                        <Button onClick={() => window.location.href = "/"} margin="15px 0 15px 0" label="Cancel"
                            backgroundColor="#ed7864">
                        </Button>
                        <Button onClick={() => window.location.href = "/"}
                            margin="15px 0 15px 30px"
                            label="Submit"
                            backgroundColor="#4bb357">
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
};

