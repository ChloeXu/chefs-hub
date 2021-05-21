import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./views/app/App";
import reportWebVitals from "./reportWebVitals";
import { RecipeDetail } from "./views/recipe-detail/RecipeDetail";
import Container from "react-bootstrap/esm/Container";

const Routing = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/recipes/:id" component={RecipeDetail} />
        </Switch>
      </Container>
    </Router>
  )
}
ReactDOM.render(
  <React.StrictMode>

    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
