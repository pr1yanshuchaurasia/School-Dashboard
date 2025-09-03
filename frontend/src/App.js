import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchool";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">SchoolApp</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Add School</Link>
            <Link className="nav-link" to="/schools">Show Schools</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}

export default App;
