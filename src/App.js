import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Sacraments from "./components/Sacraments";
import About from "./components/About";
import about from './components/partials/@constants/about'
function App() {
  return (
    <Router>
    {console.log(about)}
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/sacraments'>
            <Sacraments/>
          </Route>
          <Route path='/about/history'>
            <About about={about.history} ids={'histor'}/>
          </Route>
          <Route path='/about/ourpatronsaints'>
            <About about={about.patron} ids={'patr'}/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
