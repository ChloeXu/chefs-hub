import "./Recipes.css";
import { recipes_mock } from "../../data/sample.data"
import { Card } from "../../components/Card";

export const Recipes = () => {
    const recipes = recipes_mock;
    return (
        <div className="Recipes">
            <ul>
                {recipes.map((recipe: any) =>
                    <Card title={recipe.name} subtitle={recipe.cuisine} viewButtonLabel="View"></Card>
                )}
            </ul>
        </div>

    );
}

