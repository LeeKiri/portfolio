import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { cards } from "./utils/db"

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/portfolio/">
            <Home />
          </Route>
          <Route exact path="/portfolio/projects">
            <Projects cards={cards}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
