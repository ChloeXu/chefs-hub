import "./Recipes.css";
import { recipes_mock } from "../../data/sample.data"
import { RecipeCard } from "../recipe-card/RecipeCard";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";

export interface RecipesProps {
}

export const Recipes: React.FC<RecipesProps> = ({ ...props }) => {
    const recipes = recipes_mock;
    return (
        <Container>
            <ul className="Recipes">
                {recipes.map((recipe: any) =>
                    <Row key={recipe.id}>
                        <Col></Col>
                        <Col xs={8}>
                            <RecipeCard id={recipe.id}
                                title={recipe.name}
                                subtitle={recipe.cuisine}
                                viewButtonLabel="View"
                            />
                        </Col>
                        <Col></Col>
                    </Row>
                )}
            </ul>
        </Container>
    );
};

