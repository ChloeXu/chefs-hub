import "./RecipeDetail.css"
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button';
import { recipes_mock } from '../../data/sample.data';
import { Col, Row, ListGroup } from "react-bootstrap";

export interface RecipeDetailProps {
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ ...props }) => {
    const { id } = useParams<{ id: string }>();
    const data = recipes_mock.find((r) => r.id.toString() === id);
    return (
        <Container >
            <h2 className="header">{data?.name}</h2>
            <Row className="pl-20 pr-20 pb-20">
                <Col></Col>
                <Col xs={8}>
                    <Row className="top-bar-control">
                        <Button label="Back" margin="0 15px 0 15px" onClick={() => window.location.href = "/"} />
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row className="p-20">
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
