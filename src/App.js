import "./App.css";
import Nav from "./components/SideNavComponent";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Fashion from "./components/FashionComponent";
import NavBar from "./components/SideNavComponent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-2 p-2">
              <NavBar />
            </div>
            <div className="col-sm-7 col-lg-8 p-2">
              <Switch>
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/about" component={About} />
                <Route exact path="/fashion" render={() => <Fashion />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
