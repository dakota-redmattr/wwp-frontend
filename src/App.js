import React from "react";
import "./font.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Menu from "./components/pages/Menu/Menu";
import About from "./components/pages/About/About";
import Opportunities from "./components/pages/Opportunities/Opportunities";
import Footer from "./components/Footer/Footer";
import MenuDetail from "./components/pages/Menu/MenuDetail";
import Apply from "./components/pages/Opportunities/Apply";
import Contact from "./components/pages/Opportunities/Contact";
import WingMenu from "./components/parts/WingMenu/WingMenu";
import DrinkMenu from "./components/pages/Menu/DrinkMenu/DrinkMenu";
import ScrollToTop from "./components/parts/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/menu/wings" component={WingMenu} />
          <Route exact path="/menu/drinks" component={DrinkMenu} />
          <Route path="/menu/:slug" component={MenuDetail} />
          <Route path="/menu" component={Menu} />
          <Route path="/opportunities/contact" component={Contact} />
          <Route path="/opportunities/:job" component={Apply} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
