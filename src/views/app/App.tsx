import "./App.css";
import Container from 'react-bootstrap/Container';
import { Recipes } from "../recipes/Recipes";


export const App = () => {
  return (
    <Container className="p-3">
      <h2 className="header pb-10">Welcome To Chefs Hub</h2>
      <Recipes />
    </Container>
  );
}

