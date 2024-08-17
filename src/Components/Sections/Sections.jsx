import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "../Sections/About/About";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import JoinUs from "./JoinUs/JoinUs";
import Sponsors from "./Sponsors/Sponsors";
import Activities from "../Activities/Activities";
import Commitment from "./Commitment/Commitment";
import Goals from "../Goals/Goals";
import Structure from "../Structure/Structure";
import Groups from "../Groups/Groups";
import Gallery from "../Sections/Gallery/Gallery";

function Sections() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("about");
    }
  }, []);

  return (
    <div className="sections">
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="activities" element={<Activities />} />
        <Route path="commitment" element={<Commitment />} />
        <Route path="goals" element={<Goals />} />
        <Route path="structure" element={<Structure />} />
        <Route path="groups" element={<Groups />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default Sections;
