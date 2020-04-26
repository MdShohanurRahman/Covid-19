import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import About from "./components/pages/About";
import CountryList from "./components/pages/CountryList";
import Footer from "./components/pages/footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto">
          <Route path="/" exact component={CountryList} />
          <Route path="/about" exact component={About} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
