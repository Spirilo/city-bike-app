import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JourneyList from "../components/journeys";
import StationList from "../components/stations";
import SingleStation from "../components/station";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function FirstPage() {

  return(
    <div>
      <h4>Helsinki city bike app</h4>
      <p>Start by clicking either journeys or stations</p>
    </div>
  )
}

export function Main() {
  
  return(
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">HKI-CB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/journeys">Journeys</Nav.Link>
            <Nav.Link href="/stations">Stations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/journeys" element={<JourneyList />} />
        <Route path="/stations" element={<StationList />} />
        <Route path="/stations/:id" element={<SingleStation />} />
      </Routes>
    </>
  )
}

export default Main;