import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header'
import "./index.css";
import { App } from "./views/app/App";
import reportWebVitals from "./reportWebVitals";
import { Recipes } from "./views/recipes/Recipes";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/recipes" component={Recipes} />
      </Switch>
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
