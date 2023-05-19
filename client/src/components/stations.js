import { useEffect, useState } from "react"
import axios from "axios"
import stationService from "../services/stationService"
import { useNavigate } from "react-router-dom"
import Pagination from "./pagination"
import Button from "react-bootstrap/Button"

export function StationList() {
  const [stations, setStations] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [stationsPerPage, setStationsPerPage] = useState(12)

  const navigate = useNavigate()
  
  useEffect(() => {
    stationService.getAll().then(s => setStations(s))
  }, [])

  const indexOfLastStation = currentPage * stationsPerPage
  const indexOfFirstStation = indexOfLastStation - stationsPerPage
  const currentStations = stations.slice(indexOfFirstStation, indexOfLastStation)

  function singleView(s) {
    navigate(`/stations/${s.id}`)
  }

  const paginate = number => setCurrentPage(number)

  let rows = currentStations.map(s => 
      <li key={s.id} >{s.Nimi} <Button variant="outline-dark" onClick={() => singleView(s)}>Click for info</Button> </li>)
  return(
    <div>
      <ul className="d-grid gap-2">
        {rows}
      </ul>
      <Pagination
        dataPerPage={stationsPerPage} 
        totalData={stations.length}
        currentPage={currentPage}
        setPage={paginate} />
    </div>
  )
}

export default StationList