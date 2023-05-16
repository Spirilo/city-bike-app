import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JourneyList from "../components/journeys";
import StationList from "../components/stations";
import SingleStation from "../components/station";

export function FirstPage() {

  return(
    <div>
      Tämä on etusivu
    </div>
  )
}

export function Main() {
  
  return(
    <div>
      <nav>
        <Link to="/">Etusivu</Link>
        <Link to="/journeys">Journeys</Link>
        <Link to="/stations">Stations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/journeys" element={<JourneyList />} />
        <Route path="/stations" element={<StationList />} />
        <Route path="/stations/:id" element={<SingleStation />} />
      </Routes>
    </div>
  )
}

export default Main;