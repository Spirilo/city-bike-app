import React, { useEffect, useState } from "react"
import axios from "axios"

export function JourneyList() {
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/api/journeys")
      console.log(res)
      setJourneys(res.data)
    }
    fetch()
    console.log('Data fetch done')
  }, [])

  let rows = journeys.map(j => 
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
    </div>
  )
}

export default JourneyList