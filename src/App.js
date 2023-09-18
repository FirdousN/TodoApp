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

// import React, { Fragment } from 'react'
// import {List, List2,List3} from './Component/List/List'
// // import List3 from './Component/List/List'



// const App = () => {
//   return (
//     <Fragment>
//       <List/>
//       <List2/>
//       <List3/>
//     </Fragment>
//   )
// }

// export default App
