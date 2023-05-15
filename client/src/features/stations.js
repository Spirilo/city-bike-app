import { useEffect, useState } from "react"
import axios from "axios"

export function StationList() {
  const [stations, setStations] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/api/stations")
      console.log(res)
      setStations(res.data)
    }
    fetch()
    console.log('Data fetch done')
  }, [])

  let rows = stations.map(s => 
    <tbody key={s.id}>
      <tr>
        <td>{s.ID}</td>
        <td>{s.Nimi}</td>
        <td>{s.Osoite}</td>
      </tr>
    </tbody>)
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Station id</th>
            <th>Station name</th>
            <th>Station address</th>
          </tr>
        </thead>
        {rows}
      </table>
    </div>
  )
}

export default StationList