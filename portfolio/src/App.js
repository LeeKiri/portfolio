import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cards } from "./utils/db";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Nav />
        <Route path="/projects">
          <Projects cards={cards} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
