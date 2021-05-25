import "./App.css";
import Container from 'react-bootstrap/Container';
import { Recipes } from "../recipes/Recipes";


export const App = () => {
  return (
    <Container className="pt-20">
      <h2 className="header">Welcome To Chefs Hub</h2>
      <Recipes />
    </Container>
  );
}

