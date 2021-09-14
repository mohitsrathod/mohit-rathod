import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/contact">
            <Header />
            <Contact />
          </Route>

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;

/**MAIN */
const Main = styled.div``;
