import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
