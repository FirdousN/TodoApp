import React from "react";
import TodoApp from "./Component/TodoApp";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";

export default () => {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<TodoApp />} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
    </Router>

  );
};


