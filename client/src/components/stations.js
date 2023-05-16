import { useEffect, useState } from "react"
import axios from "axios"
import stationService from "../services/stationService"
import { useNavigate } from "react-router-dom"

export function StationList() {
  const [stations, setStations] = useState([])

  const navigate = useNavigate()
  

  console.log(station)
  useEffect(() => {
    stationService.getAll().then(s => setStations(s))
  }, [])

  function singleView(s) {
    navigate(`/stations/${s.id}`)
  }

  let rows = stations.map(s => 
      <li key={s.id} >{s.Nimi} <input type="button" value="Click for info" onClick={() => singleView(s)} /> </li>)
  return(
    <div>
      <ul>
        {rows}
      </ul>
    </div>
  )
}

export default StationList