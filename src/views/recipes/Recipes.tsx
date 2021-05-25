import "./Recipes.css";
import { recipes_mock } from "../../data/sample.data"
import { RecipeCard } from "../recipe-card/RecipeCard";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";

export const Recipes = () => {
    const recipes = recipes_mock;
    return (
        <Container>
            <ul className="Recipes">
                {recipes.map((recipe: any) =>
                    <Row>
                        <Col></Col>
                        <Col xs={8}>
                            <RecipeCard id={recipe.id} title={recipe.name} subtitle={recipe.cuisine} viewButtonLabel="View"
                            />
                        </Col>
                        <Col></Col>
                    </Row>
                )}
            </ul>
        </Container>
    );
}

