import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { cards } from "./utils/db"
import {useEffect} from "react"

function App() {
  useEffect(()=> {
    console.log(process.env.PUBLIC_URL)
  }, [])
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects cards={cards}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
