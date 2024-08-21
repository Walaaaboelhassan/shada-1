import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "../Sections/About/About";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import JoinUs from "./JoinUs/JoinUs";
import Activities from "../Activities/Activities";
import Commitment from "./Commitment/Commitment";
import Goals from "../Goals/Goals";
import Gallery from "../Sections/Gallery/Gallery";
import Memberships from "../Memberships/Memberships";
import Criteria from "../Criteria/Criteria";
import FinancialList from "../FinancialList/FinancialList";
import Future from "../Future/Future";
import ParallelList from "../ParallelList/ParallelList";
import Sponsors from "../Sponsors/Sponsors";

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
        <Route path="services" element={<Services />}>
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="memberships" element={<Memberships />} />
        </Route>
        <Route path="join-us" element={<JoinUs />} />
        <Route path="activities" element={<Activities />} />
        <Route path="commitment" element={<Commitment />}>
          <Route path="criteria" element={<Criteria />} />
          <Route path="financial-list" element={<FinancialList />} />
          <Route path="future-plan" element={<Future />} />
          <Route path="parallel-list" element={<ParallelList />} />
        </Route>
        <Route path="goals" element={<Goals />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default Sections;
