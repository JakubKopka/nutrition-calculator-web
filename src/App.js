import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Calculator from "./components/calculator";


export default function App() {
  return (
      <Router>
        <Switch>
          {/*<Route path={`/:id`} component={Item}/>*/}
          <Route path="/">
            <Calculator/>
          </Route>
        </Switch>
      </Router>
  );
}