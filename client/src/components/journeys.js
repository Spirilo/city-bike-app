import { useEffect, useState } from "react"
import journeyService from "../services/journeyService"
import Pagination from "./pagination"

export function JourneyList() {
  const [journeys, setJourneys] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [journeysPerPage, setJourneysPerPage] = useState(12)

  useEffect(() => {
    journeyService.getAll().then(r => setJourneys(r))
  }, [])

  const indexOfLastJourney = currentPage * journeysPerPage
  const indexOfFirstJourney = indexOfLastJourney - journeysPerPage
  const currentJourneys = journeys.slice(indexOfFirstJourney, indexOfLastJourney)

  const paginate = number => setCurrentPage(number)

  let rows = currentJourneys.map(j => 
    <tbody key={j.id}>
      <tr>
        <td>{j.departureStationName}</td>
        <td>{j.returnStationName}</td>
        <td>{j.distance / 1000}</td>
        <td>{j.duration / 60}</td>
      </tr>
    </tbody>)
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Departure station</th>
            <th>Return station</th>
            <th>Distance (km)</th>
            <th>Duration(min)</th>
          </tr>
        </thead>
        {rows}
      </table>
      <Pagination 
        journeysPerPage={journeysPerPage} 
        totalJourneys={journeys.length}
        currentPage={currentPage}
        setPage={paginate} />
    </div>
  )
}

export default JourneyList