import "./RecipeDetail.css"
import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button';
import { recipes_mock } from '../../data/sample.data';

export const RecipeDetail = () => {
    const { id } = useParams<{ id: string }>();
    const data = recipes_mock.find((r) => r.id.toString() === id);
    return (
        <div className="container">
            <div className="recipe-details">
                <div className="back-btn-container">
                    <Button label="Back" margin="10px 0px 10px 0px" onClick={() => window.location.href = "/recipes"} />
                </div>
                <div style={{ "textAlign": "center" }}>
                    <h2 style={{margin: "10px"}}>{data?.name}</h2>
                </div>
                <div>
                    <h4>Ingredients</h4>
                    {data?.ingredients.map((ingredient: string) =>
                        <p>{ingredient}</p>
                    )}
                </div>

            </div>
        </div>
    )
}
