import React from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Career} from "./Home/Career";
import {CourseMainCard} from "./Home/CourseMainCard";
import {Course} from "./Home/Course";
import Contact from "./Home/Contact";
import Webdetails from  "./Home/webDetail"
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/course" element={<CourseMainCard />} />
         <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details" element={<Course />} />
        <Route path="/web-details" element={<Webdetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
