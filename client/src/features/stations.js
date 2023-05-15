import { useEffect, useState } from "react"
import axios from "axios"

export function StationList() {
  const [stations, setStations] = useState([])
  const [station, setStation] = useState({})

  console.log(station)
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/api/stations")
      console.log(res)
      setStations(res.data)
    }
    fetch()
    console.log('Data fetch done')
  }, [])

  function singleView(s) {
    setStation(s)
  }

  let rows = stations.map(s => 
      <li>{s.Nimi} <input type="button" value="Click for info" onClick={() => singleView(s)} /> </li>)
  return(
    <div>
      <ul>
        {rows}
      </ul>
    </div>
  )
}

export default StationList