import "./RecipeDetail.css"
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button';
import { recipes_mock } from '../../data/sample.data';
import { Badge, Col, Row, ListGroup } from "react-bootstrap";

export interface RecipeDetailProps {
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ ...props }) => {
    const { id } = useParams<{ id: string }>();
    const data = recipes_mock.find((r) => r.id.toString() === id);
    return (
        <Container >
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <Row className="top-bar-control">
                        <Button label="Back" margin="0px" onClick={() => window.location.href = "/"} />
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row className="pt-20">
                <Col></Col>
                <Col xs={8}>
                    <h2 >{data?.name}</h2>
                    <Badge pill variant="info">{data?.cuisine}</Badge>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className="pt-20">
                <Col></Col>
                <Col xs={8}>
                    <div>
                        <h5>Ingredients</h5>
                        <ListGroup style={{ "paddingTop": "10px" }}>
                            {data?.ingredients.map(
                                (ingredient: any) =>
                                    <ListGroup.Item
                                        key={ingredient.name}
                                        style={{ "paddingTop": "15px", "paddingBottom": "0px", "fontSize": "14px", "fontWeight": 500 }}>
                                        <Row>
                                            <Col><p>{ingredient.name}</p></Col>
                                            <Col
                                                style={{ "textAlign": "right" }}>
                                                <p>{ingredient.quantity} {ingredient.unit}</p>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                            )}
                        </ListGroup>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
};
