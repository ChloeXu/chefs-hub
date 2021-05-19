import "./Recipes.css";
import { recipes_mock } from "../../data/sample.data"
import { RecipeCard } from "../recipe-card/RecipeCard";

export const Recipes = () => {
    const recipes = recipes_mock;
    return (
        <div className="container">
            <div >
                <ul className="Recipes">
                    {recipes.map((recipe: any) =>
                        <RecipeCard id={recipe.id} title={recipe.name} subtitle={recipe.cuisine} viewButtonLabel="View"
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

