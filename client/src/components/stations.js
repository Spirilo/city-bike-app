import { useEffect, useState } from "react"
import axios from "axios"
import stationService from "../services/stationService"

export function StationList() {
  const [stations, setStations] = useState([])
  const [station, setStation] = useState({})

  console.log(station)
  useEffect(() => {
    stationService.getAll().then(s => setStations(s))
  }, [])

  function singleView(s) {
    setStation(s)
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